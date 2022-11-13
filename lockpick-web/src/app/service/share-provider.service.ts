import { User } from "../model/User";
import { Injectable } from "@angular/core";
import { Carrello } from "../carrello/carrello";
import { Catalogo } from "../model/Catalogo";
import { HttpClient } from "@angular/common/http";
import { Ordine } from "../model/Ordine";
import { Prodotto } from "../model/Prodotto";

@Injectable({
  providedIn: "root",
})
export class ShareProviderService {
  constructor(private http: HttpClient) {}

  carrello: Ordine = null;
  user: User = null;
  totaleParzialeCarrello: number = 0;
  totaleArticoliCarrello: number = 0;
  catalogo: Catalogo[];
  arrayCarrello: Carrello[] = [];
  modificaProd: boolean = false;
  stringaRicercaProdotto: string = "";

  ngOnInit() {}

  //metodo che torna true o false per il recuper psw
  recuperoPsw() {
    return false;
  }

  //parte user
  isLogged() {
    if (this.getCurrentUser() != null) {
      return true;
    }
    return false;
  }

  isAdmin() {
    if (this.getCurrentUser() != null) {
      if (this.getCurrentUser().amministratore == 1) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  getCurrentUser(): User {
    return this.user;
  }

  setCurrentUser(user: User): void {
    this.user = user;
  }

  deleteCurrentUser() {
    this.user = null;
    this.totaleParzialeCarrello = 0;
    this.totaleArticoliCarrello = 0;
  }

  //Servono a visualizzare il totale parziale dalla navBar
  getTotaleParzialeCarrello(): number {
    return this.totaleParzialeCarrello;
  }

  updateTotaleParzialeCarrello(totParz) {
    this.totaleParzialeCarrello = totParz;
  }

  getTotArticoliCarrello(): number {
    return this.totaleArticoliCarrello;
  }

  updateTotArticoliCarrello(totArticoli) {
    this.totaleArticoliCarrello = totArticoli;
  }

  //CARRELLO
  setCurrentCarrello(carrello: Ordine) {
    this.carrello = carrello;
  }

  getCurrentCarrello() {
    return this.carrello;
  }

  deleteCurrentCarrello() {
    this.carrello = null;
  }

  getCurrentCarrelloCompleto() {
    return this.arrayCarrello;
  }

  clearCarrello() {
    this.carrello = null;
    this.totaleArticoliCarrello = 0;
    this.totaleParzialeCarrello = 0;
    this.arrayCarrello = [];
  }

  //quando effettuo il login viene estratto il carrello e vengono calcolati i totali parziali
  setCurrentCarrelloCompleto(carrello: Carrello[]) {
    //faccio l'assegnazione del carello
    this.arrayCarrello = carrello;

    //calcolo il totale degli articoli in carrello
    this.totaleArticoliCarrello = carrello
      .map((t) => t.qtaOrdinata)
      .reduce((acc, value) => acc + value, 0);

    //calcolo il totale parziale del costo degli articoli in carrello
    this.totaleParzialeCarrello = carrello
      .map((carrello) => carrello.prezzoProdotto * carrello.qtaOrdinata)
      .reduce((acc, value) => acc + value, 0);
  }

  //Catalogo per validators
  setCurrentCatalogo(catalogo: Catalogo[]) {
    this.catalogo = catalogo;
  }

  getCurrentCatalogo() {
    return this.catalogo;
  }

  //metodo di conversione da prodotto a carrello
  prodottoToCarrello(prodotto: Prodotto): Carrello {
    let carrello;
    this.getCurrentCatalogo().forEach((catalogo) => {
      if (prodotto.idCatalogo == catalogo.idCatalogo) {
        //creo un nuovo carrello per il frontend
        carrello = new Carrello(
          prodotto.idProdotto,
          prodotto.ordineIdOrdine,
          catalogo.nomeProdotto,
          catalogo.prezzoProdotto,
          prodotto.qtaOrdinata,
          catalogo.img,
          catalogo.idCatalogo
        );
      }
    });
    console.log("carrello aggiunto da FE: ");
    console.log(carrello);
    return carrello;
  }

  //parte storico
  totaleDeiTotali = 0;

  setTotaleDeiTotali(totaleDeiTotali: number) {
    this.totaleDeiTotali = totaleDeiTotali;
  }

  getTotaleDeiTotali() {
    return this.totaleDeiTotali;
  }

  //Metodi per il catalogo
  selectedProdotto: Catalogo;

  setProdotto(prodotto) {
    this.selectedProdotto = prodotto;
  }

  getProdotto() {
    return this.selectedProdotto;
  }

  isModificaProd(): boolean {
    return this.modificaProd;
  }

  //Redirect
  url: string;

  setUrl(url: string) {
    this.url = url;
  }

  getUrl() {
    return this.url;
  }
  getStringaRicercaProdotto(): string {
    return this.stringaRicercaProdotto;
  }

  setStringaRicercaProdotto(stringa: string) {
    this.stringaRicercaProdotto = stringa;
  }

  clearStringaRicercaProdotti() {
    this.setStringaRicercaProdotto("");
  }
}
