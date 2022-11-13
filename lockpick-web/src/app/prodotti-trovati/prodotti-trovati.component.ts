import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatalogoService } from '../service/catalogo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Catalogo } from '../model/Catalogo';

@Component({
	selector: 'app-prodotti-trovati',
	templateUrl: './prodotti-trovati.component.html',
	styleUrls: ['./prodotti-trovati.component.css']
})
export class ProdottiTrovatiComponent implements OnInit, OnDestroy {
  
	risultati: Catalogo[] = [];

	constructor(
		private catalogoService: CatalogoService,
		private router: Router,
		private route: ActivatedRoute
	) { }

	primiProdotti = false;
	finished = false;
	lastKey = 0;
	batch = 5;
	stringa: string = this.route.snapshot.queryParamMap.get('stringa');

	// Subscription collection so we can unsubscribe from them on destroy
	private _subscriptions: Subscription[] = [];

	// OnInit Hook, triggered each time the component is instantiated
	public ngOnInit(): void {
		if( this.stringa == '' || this.stringa == ' '){
			this.router.navigateByUrl("homepage");
		}else{
			// Add to our subscriptions collection
			this._subscriptions.push(
	 		// Subscribe to the ActivatedRoute for paramMap changes 
	  		this.route.queryParamMap.subscribe((paramMap) => {
				  console.log(paramMap)
			// Retrieve the view named parameter
			const stringa = this.route.snapshot.queryParamMap.get('stringa');
			// Check if we have a defined view
			if (stringa) {
				  // Trigger the view switch
				  this.risultati = [];
				  this.lastKey = 0;
				  this.finished = false;
				  this.ricercaProdotto(stringa);
			}
	 	 })
		);
		}
	  }

	// OnDestroy Hook
 	public ngOnDestroy() {
		// Unsubscribe from each Subscription
		this._subscriptions.forEach((subscription: Subscription) => { subscription.unsubscribe() });
	  }
	  
	  onScroll(){
		  if(this.finished)
		  	return;
		  this.ricercaProdotto(this.stringa);
	  }

	ricercaProdotto(stringa){
		if(stringa == "" || stringa == " "){
			this.risultati = null;
			return;
		}
		this.catalogoService.ricercaTutti(stringa,this.lastKey,this.batch).subscribe(
			prodotti => {
				this.primiProdotti = true;
				if(prodotti.length < 1){
					this.finished = true;
					if(this.risultati.length < 1)
						this.risultati = null;
				}else{
					this.lastKey += 5;
					this.risultati = [...this.risultati, ...prodotti];
					if(prodotti.length < 5)
						this.finished = true;
					}
			
				});
			}

	topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		}

	dettaglio(id){
		this.router.navigateByUrl("/dettaglio/"+id);
	}
}