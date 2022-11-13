import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catalogo } from '../model/Catalogo';
import { tap } from 'rxjs/operators';

  const headers: HttpHeaders = new HttpHeaders();
@Injectable({
    providedIn: 'root',
  })


export class InserisciProdottoService{

    constructor(private http: HttpClient) {}

    url = "http://localhost:8080/api/";

    public uploadImage(file: File): Observable<Response> {
      const fd = new FormData();
      fd.append('file', file, file.name);
      console.log(fd);
      return this.http.post<Response>(this.url + "upload", fd, {
        reportProgress: true
      });
    }

    public inserisciProdottoSenzaImg(catalogo: Catalogo): Observable<Catalogo>{
      console.log(catalogo);
      return this.http.post<Catalogo>(this.url + "catalogo", catalogo);
    }

    /** PUT: aggiorna l'immagine di un catalogo esistente */
    aggiungiImg (idCatalogo: number, file: File): Observable<any> {
      const fd = new FormData();
      fd.append('file', file, file.name);
      return this.http.put(this.url + "upload/" + idCatalogo , fd).pipe(
      tap(_ => console.log(`catalogo aggiornato con id=${idCatalogo}`)));
  }
}