import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produttore } from '../model/Produttore';

@Injectable({
    providedIn: 'root',
  })
  
export class ProduttoreService{
    constructor(private http: HttpClient){}

    url = "http://localhost:8080/api/produttore";

    getAll(): Observable<Produttore[]>{
        return this.http.get<Produttore[]>(this.url);
    }

    getOne(id: number): Observable<Produttore>{
        return this.http.get<Produttore>(this.url+"/"+id);
    }
}