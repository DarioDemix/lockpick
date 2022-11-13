import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione/registrazione.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { ModificaProfiloComponent } from './modifica-profilo/modifica-profilo.component';
import { StoricoComponent } from './storico/storico.component';
import { InserisciProdottoComponent } from './inserisci-prodotto/inserisci-prodotto.component';
import { DettaglioProdottoComponent } from './dettaglio-prodotto/dettaglio-prodotto.component';
import { RecuperoPswComponent } from './recupero-psw/recupero-psw.component'
import { RedirectComponent } from './redirect/redirect.component';
import { ProdottiTrovatiComponent } from './prodotti-trovati/prodotti-trovati.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/homepage', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'recuperoPsw', 
    component: RecuperoPswComponent
  },
  {
    path: 'registrazione',
    component: RegistrazioneComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'carrello',
    component: CarrelloComponent
  },
  {
    path: 'profilo',
    component: ProfiloComponent
  },
  {
    path: 'modificaProfilo',
    component: ModificaProfiloComponent
  },
  {
    path: 'storico',
    component: StoricoComponent
  },
  {
    path: 'inserisciProd',
    component: InserisciProdottoComponent
  },
  {
    path: 'dettaglio/:id',
    component: DettaglioProdottoComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'prodottiTrovati',
    component: ProdottiTrovatiComponent
  },
  {
    path: 'redirect',
    component: RedirectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
