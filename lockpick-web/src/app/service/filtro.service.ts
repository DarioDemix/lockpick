import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalogo } from '../model/Catalogo';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FiltroService{
    constructor(private http: HttpClient){}

    url="http://localhost:8080/api/filtro"

    getCatalogoFiltrato(pMin: number, pMax: number, lastKey: number, batch: number, idCategoria: number, idProduttore: number): Observable<Catalogo[]>{
        if(idCategoria > 0 && idProduttore > 0){
            return this.http.get<Catalogo[]>(this.url + "?idCategoria="+idCategoria+"&idProduttore="+idProduttore+"&pMin="+pMin+"&pMax="+pMax+"&lastKey="+lastKey+"&batch="+batch);
        }else if(idCategoria <= 0 && idProduttore > 0){
            //query senza categoria
            return this.http.get<Catalogo[]>(this.url + "NoCat?idProduttore="+idProduttore+"&pMin="+pMin+"&pMax="+pMax+"&lastKey="+lastKey+"&batch="+batch);
        }else if(idProduttore <= 0 && idCategoria > 0){
            //query senza produttore
            console.log("no Produttore")
            return this.http.get<Catalogo[]>(this.url + "NoProd?pMin="+pMin+"&pMax="+pMax+"&lastKey="+lastKey+"&batch="+batch+"&idCategoria="+idCategoria);
        }else if(idProduttore == 0 && idCategoria == 0){
            //query filtro solo col prezzo
            return this.http.get<Catalogo[]>(this.url + "SoloPrezzo?pMin=" + pMin + "&pMax=" + pMax + "&lastKey=" + lastKey + "&batch=" + batch);
        }
    }

    getProdottiSimiliCategoria(idCategoria: number, idCatalogo: number, lastKey: number, batch: number): Observable<Catalogo[]>{
            return this.http.get<Catalogo[]>(this.url + "SimiliCategoria?idCategoria="+idCategoria+"&idCatalogo="+idCatalogo+"&lastKey="+lastKey+"&batch="+batch);
        }


    getProdottiSimiliProduttore(idProduttore: number, idCatalogo: number, lastKey: number, batch: number): Observable<Catalogo[]>{
        return this.http.get<Catalogo[]>(this.url + "SimiliProduttore?idCategoria="+idProduttore+"&idCatalogo="+idCatalogo+"&lastKey="+lastKey+"&batch="+batch);
    }
}