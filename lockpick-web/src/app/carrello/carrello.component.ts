import { Component, OnInit, Injectable } from '@angular/core';
import { CarrelloService } from '../service/carrello.service';
import { Carrello } from './carrello';
//import { ActivatedRoute } from '@angular/router';
import { ProdottoService } from '../service/prodotto.service';
import { Prodotto } from '../model/Prodotto';
import { ShareProviderService } from '../service/share-provider.service';
import Swal from 'sweetalert2';
import { CheckoutService } from '../service/checkout.service';
import { CatalogoService } from '../service/catalogo.service';

export interface colonne{
  img: string;
  nome: string;
  prezzo: number;
  qta: number;
  qtaMax: number;
}

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  constructor(private carrelloService: CarrelloService,
              private prodottoService: ProdottoService,
              private checkoutService: CheckoutService,
              private shareProvider: ShareProviderService,
              private catalogoService: CatalogoService) { }

  prodottiInCarrello: Carrello[];

  //dati per la view
  totParz: number;
  totaleArticoli: number;

  //flag per capire se il carrello è vuoto
  isEmpty = true;

  //flag per lo user loggato
  private isLogged = this.shareProvider.isLogged();
  
  ngOnInit() {
    if(this.isLogged){
    
      let id = this.shareProvider.getCurrentUser().idUser;
      this.carrelloService.getAll(id).subscribe(
        carrello => {
            this.prodottiInCarrello = carrello;
            this.shareProvider.setCurrentCarrelloCompleto(carrello);

            this.cartIsEmpty();
            this.aggiornaTotali();
        }
      );
      }
    }

  colonneTabella : string[] = [ 
    'immagine', 
    'nome', 
    'prezzo', 
    'qta', 
    'elimina'
  ];

  aggiornaTotali(){
    //aggiorno i totali parziali e li aggiorno i dati nello sharedProvider
    
      //calcolo il totale degli articoli in carrello
      this.totaleArticoli = this.prodottiInCarrello.map(
        t => t.qtaOrdinata).reduce((acc, value) => acc + value, 0);

      //calcolo il totale parziale del costo degli articoli in carrello
      this.totParz = this.prodottiInCarrello.map(
        carrello => carrello.prezzoProdotto*carrello.qtaOrdinata).reduce((acc, value) => acc + value, 0);
    //Aggiorno lo sharedProvider
    this.shareProvider.updateTotaleParzialeCarrello(this.totParz);
    this.shareProvider.updateTotArticoliCarrello(this.totaleArticoli);
    //aggiorno il carrello
  }

  salvaCarrello(qta: number, prodottoDaSalvare: Carrello){
    let prod: Prodotto;

      //recupero il prodotto dal DB e lo aggiorno (da ottimizzare)
      this.prodottoService.getOne(prodottoDaSalvare.idProdotto).subscribe(
        prodotto => {
          //controllo se la qta è minore di 1
          if(qta < 1){
            this.prodottoService.update(prodotto).subscribe(res => {
              this.aggiornaTotali();
              Swal.fire({
                type: 'error',
                text: 'La quantità non può essere minore di 1',
                timer: 1500,
                showConfirmButton: false
              });
              prodottoDaSalvare.qtaOrdinata = 1;
              qta = 1;
              prodotto.qtaOrdinata =  1;
              //faccio l'update del prodotto della qta a 1
              this.prodottoService.update(prodotto).subscribe(
                prodottoUpdated => {
                //aggiorno la view perché da qui non avviene il blur che richiama tali metodi
                this.aggiornaTotali();
              });
            });
          }
          //se la quantità non è stata modificata non viene effettuato l'update sul DB
          if(qta != prodotto.qtaOrdinata)
          {

            //Controllo se qta ordinata è maggiore a quella nel catalogo direttamente da frontend
           this.catalogoService.getOne(prodottoDaSalvare.idCatalogo).subscribe(
              catalogo => {
                if(catalogo.idCatalogo == prodotto.idCatalogo){
                  if(catalogo.qtaProdotto >= qta){
                    prod = prodotto;

                    //salvo nel prodotto appena recuperato dal DB la qta ordinata
                    prod.qtaOrdinata = prodottoDaSalvare.qtaOrdinata;
                  
                    this.prodottoService.update(prod).subscribe();
                  }
                  else{
                      Swal.fire({
                      type: 'error',
                      title: 'Errore!',
                      text: 'La quantità selezionata è maggiore di quella disponibile',
                      timer: 1500,
                      showConfirmButton: false
                    });
                    prodottoDaSalvare.qtaOrdinata = catalogo.qtaProdotto;
                    qta = catalogo.qtaProdotto;
                    prodotto.qtaOrdinata = catalogo.qtaProdotto
                    //faccio l'update del prodotto della qta massima in catalogo
                    this.prodottoService.update(prodotto).subscribe(
                      prodottoUpdated => {
                        //aggiorno la view perché da qui non avviene il blur che richiama tali metodi
                        this.aggiornaTotali();
                      }
                    );
                  }
                  }
                }
            );
          }
        }
      );
    }

  deleteProdottoCarrello(prodotto: Carrello){
    
    //elimino lo specifico prodotto inserito nel carrello,
    //quindi elimino nel DB un recordo di Prodotto (tabella di legame)
    this.prodottoService.deleteOne(prodotto.idProdotto).subscribe(
      res => {
        //riga di codice che serve per eliminare in tempo reale dalla view i prodotti
        this.prodottiInCarrello = this.prodottiInCarrello.filter(p => p !== prodotto);
        Swal.fire({
          type: 'success',
          title: 'Prodotto eliminato',
          text: prodotto.nomeProdotto + ' eliminato dal carrello!',
          timer: 1500,
          showConfirmButton: false
        })
        this.aggiornaTotali();
        this.cartIsEmpty();
      }
    );
  }
  //funzione di controllo degli acquisti con alert per il checkout
  checkout(){
  
    Swal.fire({
      type: 'question',
      title: 'Vuoi effettuare l\'ordine?',
      html: '<h4>Il totale è di '+ this.totParz.toFixed(2) + '€</h4>',
      showCancelButton: true,
      confirmButtonText: 'Sì',
      cancelButtonText: 'No',
    }).then( (result) => {
        if( result.value) {
          this.checkoutService.effettuaOrdine().subscribe(
            res => {
              //pulisco i dati nello sharedProvider
              this.shareProvider.clearCarrello();
              this.isEmpty = true;
            }
          );
          Swal.fire(
            'Ordine effettuato!',
            'A breve ti invieremo i codici sulla tua email!',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {}
    })

  }

  cartIsEmpty(){
      //controllo se il carrello è vuoto
      if(this.prodottiInCarrello.length < 1)
        this.isEmpty = true;
      else
        this.isEmpty = false;
      
  }

}
