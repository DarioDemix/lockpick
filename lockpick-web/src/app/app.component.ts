import { Component, OnInit } from "@angular/core";
import {
  Router,
  Event,
  NavigationStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  ActivatedRoute,
} from "@angular/router";
import { ShareProviderService } from "./service/share-provider.service";
import { User } from "./model/User";
import Swal from "sweetalert2";
import { Carrello } from "./carrello/carrello";
import { CatalogoService } from "./service/catalogo.service";
import { DettaglioProdottoComponent } from "./dettaglio-prodotto/dettaglio-prodotto.component";
import { RedirectComponent } from "./redirect/redirect.component";
import { Catalogo } from "./model/Catalogo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Lockpick";
  loading = false;
  user: User = null;
  //totali da visualizzare nella navbar
  totArticoli: number;
  totParz: number;
  //carrello dello user loggato
  carrelloUser: Carrello[] = null;

  risultati;

  constructor(
    private router: Router,
    private sharedProvider: ShareProviderService,
    private catalogoService: CatalogoService,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe(async (event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          /* inserire al posto di un tempo predefinito una funzione
             che al caricamento dei prodotti finisca l'animanzione 
             del loader */
          await this.chiamaDelay(1000);
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  logout() {
    Swal.fire({
      type: "question",
      title: "Vuoi effettuare il logout?",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Logout", "Hai effettuato il logout", "success");
        this.sharedProvider.deleteCurrentUser();
        this.router.navigateByUrl("/homepage");
      }
    });
  }

  goToHomepage() {
    this.router.navigateByUrl("/homepage");
  }

  //userLoggato estrae dallo sharedProvider lo user e il carrello, se lo user è settato torna true
  //altrimenti false
  userLoggato() {
    this.user = this.sharedProvider.getCurrentUser();
    if (this.user != null) {
      //se lo user è loggato richiamo il carrello e i totali
      this.carrelloUser = this.sharedProvider.getCurrentCarrelloCompleto();
      this.totArticoli = this.totArticoliCarrello();
      this.totParz = this.totParzialeCarrello();
      return true;
    } else return false;
  }

  isAdmin() {
    if (this.userLoggato())
      return this.sharedProvider.getCurrentUser().amministratore;
    else return false;
  }

  totParzialeCarrello() {
    return this.sharedProvider.getTotaleParzialeCarrello();
  }

  totArticoliCarrello() {
    return this.sharedProvider.getTotArticoliCarrello();
  }

  chiamaDelay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  ricercaProdotto(stringa: string) {
    if (stringa == "" || stringa == " ") {
      this.risultati = null;
      return;
    }

    this.catalogoService.ricercaProdotto(stringa).subscribe((prodotti) => {
      this.risultati = prodotti;
    });
  }

  cercaProdotti(stringa: string) {
    if (stringa == "" || stringa == " ") return;
    else
      this.router.navigate(["/prodottiTrovati"], {
        queryParams: { stringa: stringa },
      });
  }

  navigaDettaglio(idCatalogo: number) {
    this.router.navigateByUrl("dettaglio/" + idCatalogo);
  }
}
