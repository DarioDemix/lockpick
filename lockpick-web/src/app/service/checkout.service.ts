import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareProviderService } from './share-provider.service';
import { Observable } from 'rxjs';
import { OrdineEvaso } from '../model/OrdineEvaso';

@Injectable({
    providedIn: 'root'
})

export class CheckoutService{
    
    constructor(private http: HttpClient,
                private sharedProvider: ShareProviderService){}
    
    url = 'http://localhost:8080/api/checkout'
    
    public effettuaOrdine(): Observable<OrdineEvaso[]>{
        let idUser = this.sharedProvider.getCurrentUser().idUser;
        return this.http.get<OrdineEvaso[]>(this.url + '/' + idUser);
    }
}