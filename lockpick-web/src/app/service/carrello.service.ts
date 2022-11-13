import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrello } from '../carrello/carrello';
import { ProdottoService } from './prodotto.service';
import { Prodotto } from '../model/Prodotto';
import { Ordine } from '../model/Ordine';
import { Catalogo } from '../model/Catalogo';
import { ShareProviderService } from './share-provider.service';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
  })
  
  export class CarrelloService{
    constructor(private http: HttpClient,
                private prodottoService: ProdottoService,
                private shareProvider: ShareProviderService){}

    url = "http://localhost:8080/api/carrello";
    urlOrdine = "http://localhost:8080/api/ordine-carrello";
    urlProdotto= "http://localhost:8080/api/prodotto";

    //gli assegnamenti dello sharedProvider vengono effettuati nei servizi dedicati
    getAll(id: number): Observable<Carrello[]>{
      return this.http.get<Carrello[]>(this.url+"/"+id)
      .pipe(tap(carrelloCompleto => {
        this.shareProvider.setCurrentCarrelloCompleto(carrelloCompleto);

        //conversione immagini in base64
        this.shareProvider.getCurrentCarrelloCompleto().forEach(prodotto => {
          prodotto.img = "data:image/png;base64,"+prodotto.img;
        });

        console.log(carrelloCompleto);
        return carrelloCompleto;
      }));
    }

    updateCarrello(prodotto: Prodotto){
      //update di prodotto
      this.prodottoService.update(prodotto);
    }

    //Controlla se esiste un carrello per quel dato utente.
    //Se esiste restituisce quello già esistente,
    //se non esiste crea un ordine con stato carrello e lo restituisce
    //RICORDA: il carrello non smette di esistere finché l'ordine non viene evaso
    getCarrello(idUtente: number): Observable<Ordine>{
      return this.http.get<Ordine>(this.urlOrdine + "/" + idUtente)
      .pipe(tap(carrello => {
        this.shareProvider.setCurrentCarrello(carrello);
        return carrello;
        }));
    }

    //Aggiunge un prodotto al carrello
    //UPDATE della tabella Prodotto
    addToCart(prodotto: Prodotto): Observable<any>{
      return this.http.post(this.urlProdotto, prodotto);
    }

    controllaProdotto(prodotto: Catalogo, qtaScelta: number): Observable<Prodotto>{
      //creo un nuovo prodotto per evitare problemi col cancellamento dell'img
      let prodottoDaInviare: Catalogo = new Catalogo();
      prodottoDaInviare.clona(prodotto);
      prodottoDaInviare.img = null;

      let idUser: number = this.shareProvider.getCurrentUser().idUser;
      return this.http.post<Prodotto>(this.url + "/aggiungi?idUser="+idUser+"&qta="+qtaScelta, prodottoDaInviare);
    }

    //metodo che viene richiamato dal bottone di aggiunta al carrello
    aggiungiAlCarrello(prodotto: Catalogo, qtaScelta: number){
      let id = this.shareProvider.getCurrentUser().idUser;
      this.getCarrello(id).subscribe(
        res => {
          //controllo se il prodotto esiste nel carrello, se sì modifico solo la qtaordinata
          this.controllaProdotto(prodotto, qtaScelta).subscribe(
            sas => {
              this.shareProvider.updateTotArticoliCarrello(this.shareProvider.getTotArticoliCarrello() + qtaScelta);
              this.shareProvider.updateTotaleParzialeCarrello(this.shareProvider.getTotaleParzialeCarrello() + (prodotto.prezzoProdotto * qtaScelta));
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              title: 'Aggiunto al carrello!' 
            })
            }
          );
        }
      );
    }

    checkQtaCarrello(idCatalogo: number, idOrdine: number): Observable<number>{
      return this.http.get<number>("http://localhost:8080/api/qtaCarrello?idCatalogo="+idCatalogo+"&idOrdine="+idOrdine);
    }

    exsist(idUser: number): Observable<Ordine>{
      return this.http.get<Ordine>(this.url+"/exsist?idUser="+idUser);
    }

    /**Metodo che controlla quanti articoli esistono nel carrello*/
    controlliQta(prodotto: Catalogo, idOrdine: number, qtaScelta: number){
            this.checkQtaCarrello(prodotto.idCatalogo, idOrdine)
            .subscribe( qta => {
              let qtaInCarrello: number = qta;
      
              if((qtaInCarrello + qtaScelta) > prodotto.qtaProdotto){
                  qtaScelta = 1;
                  Swal.fire({
                  type:'error',
                  html: '<h3>Quantità massima raggiunta</h3>',
                  timer: 1500,
                  showConfirmButton: false
                  });    
              }else{
                this.aggiungiAlCarrello(prodotto,qtaScelta);
              }
            });
            return;
    }
  }