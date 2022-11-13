import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import Swal from 'sweetalert2';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { RegistrazioneComponent } from './registrazione/registrazione/registrazione.component';
import { LoginComponent } from './login/login/login.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-module';
import { HomepageComponent } from './homepage/homepage.component';
import { LabelProdottoComponent } from './homepage/label-prodotto/label-prodotto.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { FiltriRicercaComponent } from './homepage/filtri-ricerca/filtri-ricerca.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { ModificaProfiloComponent } from './modifica-profilo/modifica-profilo.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './homepage/carousel/carousel.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { StoricoComponent } from './storico/storico.component';
import { InserisciProdottoComponent } from './inserisci-prodotto/inserisci-prodotto.component';
import { DettaglioProdottoComponent } from './dettaglio-prodotto/dettaglio-prodotto.component';
import { DescrizioneSitoComponent } from './homepage/descrizione-sito/descrizione-sito.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RecuperoPswComponent } from './recupero-psw/recupero-psw.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ProdottiTrovatiComponent } from './prodotti-trovati/prodotti-trovati.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrazioneComponent,
    HomepageComponent,
    LabelProdottoComponent,
    CarrelloComponent,
    FiltriRicercaComponent,
    ProfiloComponent,
    ModificaProfiloComponent,
    FooterComponent,
    InserisciProdottoComponent,
    DettaglioProdottoComponent,
    CarouselComponent,
    StoricoComponent,
    DescrizioneSitoComponent,
    RecuperoPswComponent,
    RedirectComponent,
    ProdottiTrovatiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SlideshowModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    Ng5SliderModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }