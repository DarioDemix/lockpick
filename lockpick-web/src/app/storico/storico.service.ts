import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdineEvaso } from '../model/OrdineEvaso';

@Injectable({
    providedIn: 'root'
})

export class StoricoService{
    constructor(private http: HttpClient){};

    url = 'http://localhost:8080/api/ordine';
    storicoUrl = "http://localhost:8080/api/storico";

    getOrdiniEvasi(idUser: number, lastKey, batch): Observable<number[]>{

        if(!lastKey) lastKey = 0;

       return this.http.get<number[]>(this.url + '/getOrdiniEvasi' + '/' + idUser + '/' + lastKey + '/' + batch);
    
    }

    getOrdineByIdOrdine(idOrdine: number): Observable<OrdineEvaso[]>{
        return this.http.get<OrdineEvaso[]>(this.url);
    }
    
    getStoricoOrdinato(idUser: number, lastKey, batch): Observable<any>{
       return this.http.get<any>(this.storicoUrl + '/' + idUser + '/' + lastKey + '/' + batch);
    }


    getTotaleOrdine(ordine: OrdineEvaso[]){
      //calcolo il totale parziale del costo degli articoli dell'ordine
      let totaleOrdine = ordine.map(
        tupla => tupla.prezzoPagato*tupla.qtaOrdinata).reduce((acc, value) => acc + value, 0);

      return totaleOrdine;
    //Aggiorno lo sharedProvider
    //this.shareProvider.updateTotaleParzialeCarrello(this.totParz);
    //this.shareProvider.updateTotArticoliCarrello(this.totaleArticoli);
    }

    addToTotaleDeiTotali(totaleDeiTotali: number, totaleOrdine: number){
        totaleDeiTotali += totaleOrdine;
        return totaleDeiTotali;
    }
}