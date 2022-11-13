import { InserisciProdottoService } from './inserisci-prodotto.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Catalogo } from '../model/Catalogo';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { ShareProviderService } from '../service/share-provider.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogoService } from '../service/catalogo.service';
import { Subscription } from 'rxjs';
import { Produttore } from '../model/Produttore';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { ProduttoreService } from '../service/produttore.service';

class ImageSnippet {
  constructor(
              public src: string,
              public file: File
  ) {}
}

@Component({
  selector: 'app-inserisci-prodotto',
  templateUrl: './inserisci-prodotto.component.html',
  styleUrls: ['./inserisci-prodotto.component.css']
})

export class InserisciProdottoComponent implements OnInit,OnDestroy{

  constructor(
              private imageService: InserisciProdottoService,
              private location: Location,
              private sharedProvider: ShareProviderService,
              private router: Router,
              private route: ActivatedRoute,
              private catalogoService: CatalogoService,
              private categoriaService: CategoriaService,
              private produttoreService: ProduttoreService
  ){}

  selectedFile: File;
  imageUrl: string = "/assets/img/default-image.jpg";
  reader: FileReader = new FileReader();
  //dati per la view di modifica
  nomeCategoria: string;
  nomeProduttore: string;

  //admin
  isAdmin = false;

  //Campi form
  private prodottoData: Catalogo = new Catalogo();

  private produttori: Produttore[];
  private categorie: Categoria[];

  private _subscriptions: Subscription[] = [];

  ngOnInit(){
			this._subscriptions.push(
        // Subscribe to the ActivatedRoute for paramMap changes 
         this.route.queryParamMap.subscribe((paramMap) => {
       // Retrieve the view named parameter
       const type = this.route.snapshot.queryParamMap.get('type');
       // Check if we have a defined view
       if (type == 'insert') {
           // Trigger the view switch
           this.clearProdotto(this.prodottoData);
       }
       })
     );
    if(this.sharedProvider.getCurrentUser() != null)
      if(this.sharedProvider.getCurrentUser().amministratore == 1){
          this.categoriaService.getAll().subscribe(
            categorie => { this.categorie = categorie });
          this.produttoreService.getAll().subscribe(
            produttori => { this.produttori = produttori });
          this.isAdmin = true;
          if(this.route.snapshot.queryParamMap.get('type') == 'edit'){
            this.catalogoService.copiaProdotto(this.prodottoData, this.sharedProvider.getProdotto());
            this.cercaCategoria(this.sharedProvider.getProdotto().idCategoria);
            this.cercaProduttore(this.sharedProvider.getProdotto().idProduttore);
            this.imageUrl = "data:image/png;base64,"+this.prodottoData.img;

          }
      }
  }

  ngOnDestroy(){
    this.clearProdotto(this.prodottoData);
    this.sharedProvider.setProdotto(null);

    this._subscriptions.forEach((subscription: Subscription) => { subscription.unsubscribe() });
  }

  inserisciPrezzo(prezzo: number){
    this.prodottoData.prezzoProdotto = parseInt(prezzo.toFixed(2));
  }

  //quando viene selezionato il file
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];

    //show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  //quando viene cliccato il bottone upload
  onUpload() {
    this.imageService.uploadImage(this.selectedFile).subscribe(
      res => {
      }
    );
  }
 
  onSubmit(){
    //if(this.selectedFile == null)
    //  return;
    
    //si fa una insert di un catalogo senza immagine, nella callback di subscribe si fa una update del record con l'invio della foto con rotta dedicata "/api/upload"
    this.imageService.inserisciProdottoSenzaImg(this.prodottoData).subscribe(
      res => {
        if(this.selectedFile != null){
          this.imageService.aggiungiImg(res.idCatalogo ,this.selectedFile).subscribe(
            () => {
              Swal.fire({
                type: 'success',
                text: 'Il prodotto è stato inserito correttamente nel catalogo',
                timer: 1500
              });
            },
          );
        }
        else{
          Swal.fire({
            type: 'success',
            text: 'Il prodotto è stato inserito nel catalogo senza immagine'
          });
        }
      }   
    );
  }
  goBack(){
    this.location.back();
  }

  modificaProdotto(){
    //se il prodotto non è stato modificato non faccio chiamate
    if(this.catalogoService.equals(this.prodottoData, this.sharedProvider.getProdotto()) &&
       this.selectedFile == undefined)
          this.router.navigateByUrl("homepage");
    else{
      this.catalogoService.updateProdotto(this.prodottoData).subscribe(
        res => {
          this.sharedProvider.setUrl("homepage");
          if(this.selectedFile != undefined){
            this.imageService.aggiungiImg(this.prodottoData.idCatalogo, this.selectedFile).subscribe(
              res => {
                this.router.navigateByUrl("redirect");
              },
              err => console.log(err));
          }
          else{
            this.router.navigateByUrl("homepage");
          }
          Swal.fire({
            text: 'Prodotto modificato!',
            type: 'success',
            showConfirmButton: false,
            timer: 1500
          });
          this.imageUrl = "/assets/img/default-image.jpg";
        },
        err => console.log(err)
      );
    }
  }

  clearProdotto(catalogo){
    catalogo.idCatalogo = null;
    catalogo.nomeProdotto = null;
    catalogo.descrProdotto = null;
    catalogo.prezzoProdotto = null;
    catalogo.qtaProdotto = null;
    catalogo.idCategoria = null;
    catalogo.idProduttore = null;
    return catalogo;
  }

  setCategoria(id:number){
    this.prodottoData.idCategoria = id;
  }
  
  setProduttore(id:number){
    this.prodottoData.idProduttore = id;
  }

  cercaCategoria(idCategoria: number): void{
    this.categoriaService.getOne(idCategoria).subscribe(_ => {this.nomeCategoria = _.nomeCategoria});
  }

  cercaProduttore(idProduttore: number): void{
    this.produttoreService.getOne(idProduttore).subscribe(_ => {this.nomeProduttore = _.nomeProduttore});
  }
}