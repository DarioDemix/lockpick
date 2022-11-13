import { Component, OnInit } from '@angular/core';
import { FiltroService } from 'src/app/service/filtro.service';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from 'src/app/service/catalogo.service';
import { Subscription } from 'rxjs';
import { Catalogo } from 'src/app/model/Catalogo';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(
                private filtroService : FiltroService,
                private route : ActivatedRoute,
                private catalogoService: CatalogoService) { }

  private _subscriptions: Subscription[] = [];
  private prodottiSimili :Catalogo[] = [];
  private prodotto: Catalogo;
  idProduttore: number;
  idCategoria: number;
  //attributo per escludere dalla query il prodotto del dettaglio
  idCatalogo: number;
  lastKey: number = 0;
  finished: boolean = false;
  
  prodottiPrima: boolean = false;
  prodottiDopo: boolean = false;

  ngOnInit() {
    
      this.route.paramMap.subscribe((paramMap) => {

        //acquisisco l'id del prodotto del dettaglio
        this.idCatalogo = parseInt(paramMap.get('id'));

        //prendo l'oggetto del prodotto del detttaglio
        this.catalogoService.getOne(this.idCatalogo).subscribe(
          prodotto => {
            this.prodotto = prodotto;
            
            //assegno gli id per la ricerca dei prodotti simili
            this.idProduttore = this.prodotto.idProduttore;
            this.idCategoria = this.prodotto.idCategoria;

            //assegno all'array di prodottiSimili i prodotti simili trovati
            this.filtroService.getProdottiSimiliCategoria(this.idCategoria, this.idCatalogo, this.lastKey,5).subscribe(
              prodottiSimili => {
                if(prodottiSimili.length > 4)
                {
                  this.prodottiDopo = true;
                }
                prodottiSimili.pop();
                this.prodottiSimili = prodottiSimili;

              }
            )
        }); 
      })

   }

  // funzione che controlla se il nome è troppo lungo
  daTroncare(nome: string): boolean {
    if (nome.length >= 17)
      return true;
    return false;
  }

  prodottiPrecedenti(){
    if(this.lastKey < 1){
      this.prodottiPrima = false;
      return;
    }
    
    this.prodottiPrima = true;
    this.finished = false;
    this.prodottiDopo = true;
    this.lastKey -= 4;

    this.filtroService.getProdottiSimiliCategoria(this.idCategoria, this.idCatalogo, this.lastKey, 4)
    .subscribe(
      prodottiPrecedenti => {
         this.prodottiPrima = false;
        this.prodottiSimili = prodottiPrecedenti;
      }
    );
  }

  prodottiSuccessivi(){
    if(this.finished){
      return;
    }
    
    this.lastKey += 4;

    this.filtroService.getProdottiSimiliCategoria(this.idCategoria, this.idCatalogo, this.lastKey, 5)
    .subscribe(
      prodottiSuccessivi => {
        console.log(prodottiSuccessivi)
        if(prodottiSuccessivi.length < 5){
          this.finished = true;
          this.prodottiDopo = false;
          this.prodottiSimili = prodottiSuccessivi;
          this.prodottiPrima = true;
          return;
        }

        this.prodottiPrima = true
        this.prodottiDopo = true;
        this.prodottiSimili = prodottiSuccessivi;

        this.finished = false;
      }
    );
  }
}
