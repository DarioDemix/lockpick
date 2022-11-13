import { Component, OnInit, OnDestroy} from '@angular/core';
import { Catalogo } from 'src/app/model/Catalogo';
import { CatalogoService } from 'src/app/service/catalogo.service';
import { CarrelloService } from 'src/app/service/carrello.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ShareProviderService } from 'src/app/service/share-provider.service';
import { Subscription } from 'rxjs';
import { FiltroService } from 'src/app/service/filtro.service';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-label-prodotto',
  templateUrl: './label-prodotto.component.html',
  styleUrls: ['./label-prodotto.component.css']
})
export class LabelProdottoComponent implements OnInit,OnDestroy {

  private prodotti: Catalogo[] = [];
  private imageUrl = "";
  private qtaOrdinata = 1;
  private batch = 8;
  private lastKey = 0;
  private finished = false;
  primiProdotti=false;
  breakpoint: number;
  filtroAttivo: boolean = false;
  noProdotti = false;

  //dati per i filtri
  idCategoria: number;
  idProduttore: number;
  pMin: number;
  pMax : number;
  lkFiltro = 0;
  batchFiltro= 8;

  constructor(private catalogoService: CatalogoService,
              private carrelloService: CarrelloService,
              private filtroService: FiltroService,
              private router: Router,
              private sharedProvider: ShareProviderService,
              private route: ActivatedRoute)
              { }

  // Subscription collection so we can unsubscribe from them on destroy
  private _subscriptions: Subscription[] = [];

  ngOnInit() {
    this.noProdotti=false;
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 4;
    // Add to our subscriptions collection
    this._subscriptions.push(
      // Subscribe to the ActivatedRoute for paramMap changes 
      this.route.queryParamMap.subscribe((paramMap) => {
        this.noProdotti = false;
        this.prodotti = [];
        this.finished = false;
        // Retrieve the view named parameter
        this.idCategoria = parseInt(paramMap.get('idCategoria'));
        this.idProduttore = parseInt(paramMap.get('idProduttore'));
        this.pMin = parseInt(paramMap.get('pMin'));
        this.pMax = parseInt(paramMap.get('pMax'));
        // Check if we have a defined view
        if (this.pMin >=0 && this.pMax) {
          this.lkFiltro = 0;
          // Trigger the view switch
          console.log("prodotti filtrati");
          if(!this.idCategoria)
            this.idCategoria = 0;
          if(!this.idProduttore)
            this.idProduttore = 0;
          this.filtroAttivo = true;
          console.log(this.idCategoria, this.idProduttore)
          this.getProdottiFiltrati(this.idCategoria, this.idProduttore, this.pMin, this.pMax, this.lkFiltro, this.batchFiltro);
        }else{
          this.primiProdotti = false;
          this.lastKey = 0;  
          console.log("primiProdotti: "+this.primiProdotti);
          this.filtroAttivo = false;
          this.getProdotti();
        }
      })
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from each Subscription
    this._subscriptions.forEach((subscription: Subscription) => { subscription.unsubscribe() });
  }

  onResize(event) {
    let larghezza = event.target.innerWidth;
    if(larghezza <= 600 && larghezza > 1)
      this.breakpoint = 1;
    if(larghezza <= 900 && larghezza > 601)
      this.breakpoint = 2;
    if(larghezza <= 1200 && larghezza > 901)
      this.breakpoint = 3;
    if(larghezza > 1200)
      this.breakpoint = 4;
    //this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 4;
  }

  onScroll(){
    this.noProdotti = false;
    if(this.filtroAttivo){
      console.log("prodotti filtrati")
      this.getProdottiFiltrati(this.idCategoria, this.idProduttore, this.pMin, this.pMax, this.lkFiltro, this.batchFiltro);
    }else{
      this.getProdotti();
    }
  }

  // funzione che controlla se il nome è troppo lungo
   daTroncare(nome: string): boolean{
    if(nome.length > 18)
    return true;
    return false;
  }

  getProdotti(): void{
      console.log(this.lastKey, this.batch)
      this.catalogoService.getAll(this.lastKey,this.batch).subscribe(
        prodotti => {
      
        this.primiProdotti = true;
          
        this.lastKey += 8;
        if(prodotti.length < 8){
          this.prodotti = [...this.prodotti, ...prodotti];
          console.log(this.prodotti)
          this.finished = true;
          console.log("finito")
          if(this.prodotti.length < 1)
            this.noProdotti = true;
          return;
        }
        else{
          this.prodotti = [...this.prodotti, ...prodotti];
        }
   
      });
  }

  getProdottiFiltrati(idCategoria: number, idProduttore: number, pMin: number, pMax: number, lastKey: number, batch: number){
    this.filtroService.getCatalogoFiltrato(pMin, pMax, lastKey, batch,idCategoria, idProduttore)
    .subscribe(prodotti => {
        this.primiProdotti = true;
          
        this.lkFiltro += 8;

        if(prodotti.length < 8){
          this.prodotti = [...this.prodotti, ...prodotti];
          console.log(this.prodotti)
          this.finished = true;
          console.log("finito")
          if(this.prodotti.length < 1)
            this.noProdotti = true;
          return;
        }
        else{
          this.prodotti = [...this.prodotti, ...prodotti];
        }
    });
    }

  //Al click di aggiungi al carrello, se non esiste un ordine con stato carrello ne creo uno,
  //se no associo il prodotto al carrello già esistente
  aggiungiAlCarrello(prodotto: Catalogo){

    if(!this.sharedProvider.isLogged())
    {
      return this.router.navigateByUrl("/login")
    }

    if(prodotto.qtaProdotto < 1){
      Swal.fire({
        type:'error',
        html: '<h3>Prodotto esaurito!</h3>',
        timer: 1500,
        showConfirmButton: false
      })
    }
    else{
      this.carrelloService.exsist(this.sharedProvider.getCurrentUser().idUser).subscribe(
        _ordine => {
          let ordine = _ordine;
          if(ordine){
            //incapsulamento
            this.carrelloService.controlliQta(prodotto,ordine.idOrdine,1);
          }else
            this.carrelloService.aggiungiAlCarrello(prodotto,1);
        });
    }
  }

  //PARTE ADMIN

  //se l'admin clicca su cancella gli viene chiesta la conferma
  clickCancella(catalogo: Catalogo){
    this.cancella(catalogo);
  }

  cancella(catalogo: Catalogo): void {
      Swal.fire({
        type: 'question',
        title: 'Vuoi cancellare il prodotto?',
        text: 'Non puoi tornare indietro...',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
      }).then( (result) => {
          if( result.value) {
            Swal.fire(
              'Cancellato',
              'Il prodotto è stato eliminato',
              'success'
            )
            //riga di codice che serve per eliminare in tempo reale dalla view i prodotti
            this.prodotti = this.prodotti.filter(p => p !== catalogo);
            this.catalogoService.deleteCatalogo(catalogo).subscribe(
              res => { }
            );
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            Swal.fire(
              'Salvato',
              'Il prodotto non è stato cancellato',
              'error'
            )
          }
      })
  }

  modifica(prodotto){
    this.sharedProvider.setProdotto(prodotto);
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 430;
    document.documentElement.scrollTop = 430;
  }

  dettaglio(id: number){
    this.router.navigateByUrl("/dettaglio/"+id);
  }
}
