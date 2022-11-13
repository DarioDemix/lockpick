import { HttpClient } from '@angular/common/http';
import { Catalogo } from '../model/Catalogo';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ShareProviderService } from './share-provider.service';

@Injectable({
    providedIn: 'root',
  })
  
export class CatalogoService{
    constructor(private http: HttpClient,
                private sharedProvider: ShareProviderService){}

    private url = "http://localhost:8080/api/catalogo";

    /** POST: add a new catalogo to the server */
    addCatalogo (catalogo: Catalogo): Observable<Catalogo> {
        return this.http.post<Catalogo>(this.url, catalogo).pipe(
        tap((newCatalogo: Catalogo) => console.log("catalogo aggiunto"))
        );
    }

    //classica richiesta get per alcuni record
    getAll(lastKey, batch): Observable<Catalogo[]>{
        return this.http.get<Catalogo[]>(this.url + "?lastKey="+lastKey+"&batch="+batch)
        .pipe(
            tap(_ => {
                console.log("trovati prodotti");
                     })
        );
    }

    //classica richiesta get per tutti i record
    getAllAll(): Observable<Catalogo[]>{
        return this.http.get<Catalogo[]>(this.url+"/all")
        .pipe(
            tap(_ => {
                console.log("trovati prodotti");
                        })
        );
    }
    

    getOne(id: number): Observable<Catalogo>{
        return this.http.get<Catalogo>(this.url + "/" + id )
        .pipe(
            tap(_ => console.log("trovato prodotto"))
        );
    }

    /** PUT: update sul catalogo */
    updateProdotto (catalogo: Catalogo): Observable<any> {
        return this.http.put(this.url + "/" + catalogo.idCatalogo , catalogo).pipe(
        tap(_ => console.log(`catalogo aggiornato con id=${catalogo.idCatalogo}`)));
    }

    /** DELETE: cancella un prodotto da Catalogo */
    deleteCatalogo (catalogo: Catalogo | number): Observable<Catalogo> {
        const id = typeof catalogo === 'number' ? catalogo : catalogo.idCatalogo;
        const url = `${this.url}/${id}`;
  
        return this.http.delete<Catalogo>(url).pipe(
            tap(_ => console.log(`deleted catalogo id=${id}`))
        );
  }

    
    ricercaProdotto(stringa: string): Observable<Catalogo[]>{
        return this.http.get<Catalogo[]>('http://localhost:8080/api/ricerca?stringa='+stringa);
    }

    ricercaTutti(stringa: string, lastKey: number, batch: number): Observable<Catalogo[]>{
        return this.http.get<Catalogo[]>('http://localhost:8080/api/ricercaTutti?stringa='+stringa+'&lastKey='+lastKey+'&batch='+batch);
    }

    equals(c1: Catalogo, c2: Catalogo): boolean{
        if(c1.idCatalogo == c2.idCatalogo &&
        c1.nomeProdotto == c2.nomeProdotto &&
        c1.descrProdotto == c2.descrProdotto &&
        c1.prezzoProdotto == c2.prezzoProdotto &&
        c1.qtaProdotto == c2.qtaProdotto &&
        c1.idCategoria == c2.idCategoria &&
        c1.idProduttore == c2.idProduttore) return true;

        return false;
    }

    copiaProdotto(cVuoto: Catalogo, cDaCopiare: Catalogo){
        cVuoto.idCatalogo = cDaCopiare.idCatalogo; 
        cVuoto.nomeProdotto = cDaCopiare.nomeProdotto;
        cVuoto.descrProdotto = cDaCopiare.descrProdotto;
        cVuoto.prezzoProdotto = cDaCopiare.prezzoProdotto;
        cVuoto.qtaProdotto = cDaCopiare.qtaProdotto;
        cVuoto.img = cDaCopiare.img;
        cVuoto.idProduttore = cDaCopiare.idProduttore;
        cVuoto.idCategoria = cDaCopiare.idCategoria;
    }
}