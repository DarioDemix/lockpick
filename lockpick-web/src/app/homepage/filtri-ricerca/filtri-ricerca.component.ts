import { Component, OnInit, OnDestroy } from '@angular/core';
import { Options } from 'ng5-slider';
import { ProduttoreService } from 'src/app/service/produttore.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Produttore } from 'src/app/model/Produttore';
import { Categoria } from 'src/app/model/Categoria';
import { FiltroService } from 'src/app/service/filtro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filtri-ricerca',
  templateUrl: './filtri-ricerca.component.html',
  styleUrls: [
              './filtri-ricerca.component.css']
              /*,
              './filtri-ricerca.component.scss']
              */
})
export class FiltriRicercaComponent implements OnInit, OnDestroy {

  constructor(private produttoreService: ProduttoreService,
              private categoriaService: CategoriaService,
              private filtroService: FiltroService,
              private router: Router,
              private route: ActivatedRoute) { }

  private _subscriptions: Subscription[] = [];
  private selectedProd;
  private selectedCat;

  ngOnInit() {
    this.getCategorie();
    this.getProduttori();

    this._subscriptions.push(
      this.route.queryParamMap.subscribe((paramMap) => {
        this.selectedProd="";
        this.selectedCat="";
        this.setCat(0);
        this.setProd(0);
      })
    )
  }
  ngOnDestroy() {
    this._subscriptions.forEach((subscription: Subscription) => { subscription.unsubscribe() });
  }

  idProduttore: number; 
  nomeProduttore: string;
  produttori: Produttore[];
  idCategoria: number;
  categorie: Categoria[];
  pMin: number;
  pMax: number;

  /*                 specifiche per lo slider                   */
  prezzoMinimo: number = 0;             //valore minimo segnato
  prezzoMassimo: number = 100;          //valore massimo segnato
  options: Options = {
    floor: 0,                           //valore min possibile
    ceil: 100,                          //valore max possibile
    step: 5,                            //intervallo min
    translate: (value: number): string => {
      return '€' + value;
    }
  };

  setProd(idProduttore: number){
    this.idProduttore = idProduttore;
  }

  getProduttori(){
    this.produttoreService.getAll().subscribe(_ => {
      this.produttori = _;
    })
  }

  setCat(idCategoria: number){
    this.idCategoria = idCategoria;
  }

  getCategorie(){
    this.categoriaService.getAll().subscribe(_ => {
      this.categorie = _;
    })
  }

  cerca(){
    this.router.navigateByUrl("/homepage?idCategoria="+this.idCategoria+"&idProduttore="+this.idProduttore+"&pMin="+this.prezzoMinimo+"&pMax="+this.prezzoMassimo);
  }
}
