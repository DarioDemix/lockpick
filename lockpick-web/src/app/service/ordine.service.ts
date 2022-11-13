import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Ordine } from '../model/Ordine';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})

export class OrdineService{
    constructor(private http: HttpClient) {}

    private ordineUrl = 'http://localhost:8080/api/ordine';

    /**GET ordini dal server */
    //torna un Observable di array di Ordine
    getOrdini(): Observable<Ordine[]>{
        return this.http.get<Ordine[]>(this.ordineUrl)
            .pipe(
                tap(_ => console.log("trovati ordini")),
                catchError(
                this.handleError('getOrdini',[]))
            );
    }

    /**
    * Error handler generico, accetta come parametri il nome dell'operazione fallita e
    * il valore da far tornare come risultato, cioè il tipo di ritorno che l'app si aspetta.
    * Restituisce 
    *
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    private handleError<T> (operation = 'operation', result?: T) {
        //da commentare bene
        return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }

}