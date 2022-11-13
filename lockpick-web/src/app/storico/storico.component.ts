import { Component, OnInit } from '@angular/core';
import { ShareProviderService } from '../service/share-provider.service';
import { StoricoService } from './storico.service';
import * as _ from 'lodash'
import { OrdineEvaso } from '../model/OrdineEvaso';
import { Storico } from './Storico';
import { Router } from '@angular/router';

@Component({
	selector: 'app-storico',
	templateUrl: './storico.component.html',
	styleUrls: 
		[
			'../carrello/carrello.component.css',
			'./storico.component.css'
		]
})

export class StoricoComponent implements OnInit {
	constructor(private storicoService: StoricoService,
				private sharedProvider: ShareProviderService,
				private route: Router) { }

	batch = 3; //size of each query
	lastKey = 0; //key to offset next query from
	finished = false;
	isLogged = this.sharedProvider.isLogged();
  isVuoto = false;

	//per il totale di tutti gli ordini
	totaleAppoggio = 0;
	totaleDeiTotali = 0;

	//totale del singolo ordine da visualizzare a fondo tabella
	getTotaleOrdine(ordine: OrdineEvaso[]): number{
		let totaleOrdine =  this.storicoService.getTotaleOrdine(ordine);
		
		return totaleOrdine;
	}

	getTotaleDeiTotali(): string{
		return this.totaleDeiTotali.toFixed(2);
	}

	ngOnInit() {
		if(this.isLogged){
			this.getOrdini();
		}
	}

	public scroll = 0;

	onScroll(){
		if(this.isLogged){
      this.finished = false;
		  this.scroll++;
		  console.log("scrolled!");
		this.getOrdini();
		}
	}

	storico: Storico[] = new Array();

	private getOrdini() {
		if (this.finished) return;
		
      let idUser = this.sharedProvider.getCurrentUser().idUser;
      this.storicoService.getStoricoOrdinato(idUser, this.lastKey, this.batch+1).subscribe(
      ordini=>{
        this.lastKey += 4;
        //se non ci sono più ordini calcolo il totale dei totali
        if(!ordini){
          this.finished = true;
            if(this.storico[0] == null){
              this.isVuoto = true;
            }
          /*this.finished = true;
          this.totaleDeiTotali = this.totaleAppoggio;*/
          console.log("fine");
			}
			else{
				console.log(ordini);
				this.storico = [...this.storico, ...ordini];

				//calcolo il totale di questi ordini
				ordini.forEach(ordine => {
					this.totaleAppoggio += this.getTotaleOrdine(ordine);
				});   
      }
      this.finished = true;
      this.totaleDeiTotali = this.totaleAppoggio;
      
		});
	}

	
	topFunction() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}

	goToDetail(idCatalogo: number){
		this.route.navigateByUrl("/dettaglio/"+idCatalogo);
	}

  }

