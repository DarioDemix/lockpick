import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prodotto } from '../model/Prodotto';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getNodeInjectable } from '@angular/core/src/render3/di';


@Injectable({
    providedIn: 'root'
  })

export class ProdottoService{

    constructor(private http: HttpClient){}

    private url = "http://localhost:8080/api/prodotto"

    getOne(idProdotto: number): Observable<Prodotto>{
        return this.http.get<Prodotto>(this.url + "/" + idProdotto);
    }


    deleteOne(id: number){
        return this.http.delete(this.url + "/" + id);
    }

    //**PUT: aggiorna un prodotto nel DB */
    update(prodotto: Prodotto): Observable<any>{
        return this.http.put(this.url, prodotto).pipe(
            tap(_ => console.log('updated Prodotto id='+prodotto.idProdotto))
        )
    }

}