import { Component, OnInit, Injectable, Input, OnDestroy } from '@angular/core';
import { CatalogoService } from '../service/catalogo.service';
import { Catalogo } from '../model/Catalogo';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrelloService } from '../service/carrello.service';
import { ShareProviderService } from '../service/share-provider.service';
import { Prodotto } from '../model/Prodotto';
import { ProdottoService } from '../service/prodotto.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { Ordine } from '../model/Ordine';
import { CategoriaService } from '../service/categoria.service';
import { ProduttoreService } from '../service/produttore.service';

@Injectable({
providedIn: 'root'
})

@Component({
  selector: 'app-dettaglio-prodotto',
  templateUrl: './dettaglio-prodotto.component.html',
  styleUrls : ['./dettaglio-prodotto.component.css']
})
export class DettaglioProdottoComponent implements OnInit, OnDestroy {

  constructor(
              private catalogoService: CatalogoService,
              private location: Location,
              private route: ActivatedRoute,
              private carrelloService: CarrelloService,
              private sharedProvider: ShareProviderService,
              private prodottoService: ProdottoService,
              private router: Router,
              private categoriaService: CategoriaService,
              private produttoreService: ProduttoreService
  ) { }
  
  prodotto: Catalogo;
  imageUrl;
  private qtaScelta = 1;
  nomeProduttore: string;
  nomeCategoria: string;

// Subscription collection so we can unsubscribe from them on destroy
private _subscriptions: Subscription[] = [];

// OnInit Hook, triggered each time the component is instantiated
public ngOnInit(): void {
  // Add to our subscriptions collection
  this._subscriptions.push(
    // Subscribe to the ActivatedRoute for paramMap changes 
    this.route.paramMap.subscribe((paramMap) => {
      // Retrieve the view named parameter
      const id = parseInt(paramMap.get('id'));
      // Check if we have a defined view
      if (id) {
        // Trigger the view switch
        this.getOne(id);
      }
    })
  );
}

  // OnDestroy Hook
  public ngOnDestroy() {
  // Unsubscribe from each Subscription
  this._subscriptions.forEach((subscription: Subscription) => { subscription.unsubscribe() });
}

  getOne(id: number){
    this.catalogoService.getOne(id).subscribe(
      res => {
        this.produttoreService.getOne(res.idProduttore).subscribe(
          produttore => {
            this.nomeProduttore = produttore.nomeProduttore;
          }
        );
        this.categoriaService.getOne(res.idCategoria).subscribe(
          categoria => {
            this.nomeCategoria = categoria.nomeCategoria;
          }
        )
        this.prodotto = res;
        this.prodotto.img = this.prodotto.img;
        this.imageUrl = this.prodotto.img;
      }
    );
  }

  goBack(){
    this.location.back();
  }

  controlloQta(qta){
    if(qta < 1){
      this.qtaScelta = 1;
    }else if(qta > this.prodotto.qtaProdotto){
      this.qtaScelta = this.prodotto.qtaProdotto;
    }
  }

  aggiungiAlCarrello(prodotto: Catalogo){
    let idOrdine: number;
    let qtaInCarrello;
    let ordine: Ordine;
 
      if(this.sharedProvider.getCurrentUser() == null){
        //aggiungere lo stato per il reindirizzamento dopo il login
        return this.router.navigateByUrl("login");
        }

      if(this.disponibile(prodotto.qtaProdotto)){
          Swal.fire({
            type:'error',
            html: '<h3>Prodotto esaurito!</h3>',
            timer: 1500,
            showConfirmButton: false
          });
          return;
      }

      this.carrelloService.exsist(this.sharedProvider.getCurrentUser().idUser).subscribe(
        _ordine => {
          ordine = _ordine;

          if(ordine){
            //incapsulamento
            this.carrelloService.controlliQta(prodotto,ordine.idOrdine,this.qtaScelta);
          }else{
            this.carrelloService.aggiungiAlCarrello(prodotto,this.qtaScelta);
          }

        }
      );

    let newProdotto: Prodotto = new Prodotto();

  
    //controllo se nel carrello già esiste il Prodotto in questione
    this.prodottoService

    //se no lo creo

    //se sì eseguo l'update della qtà
  }

  disponibile(qta: number):boolean{
    if(qta>0)
      return false;
    else
    return true;
  }
}
