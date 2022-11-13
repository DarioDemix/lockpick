import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../model/Categoria';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  
export class CategoriaService{
    constructor(private http: HttpClient){}

    url = "http://localhost:8080/api/categoria";

    getAll(): Observable<Categoria[]>{
        return this.http.get<Categoria[]>(this.url);
    }

    getOne(id: number): Observable<Categoria>{
        return this.http.get<Categoria>(this.url+"/"+id);
    }
}