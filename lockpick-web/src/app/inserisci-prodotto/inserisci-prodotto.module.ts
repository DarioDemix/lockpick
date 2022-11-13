import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { InserisciProdottoService } from './inserisci-prodotto.service';
import { InserisciProdottoComponent } from './inserisci-prodotto.component';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClient,
    ],
    providers: [
        InserisciProdottoService
    ],
    exports: [
        InserisciProdottoComponent
    ]
})
export class InserisciProdottoModule{}