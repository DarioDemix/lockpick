package com.lockpick.controller;

import java.util.Date;
import java.util.List;

import com.lockpick.DTO.CarrelloDTO;
import com.lockpick.DTO.OrdineDTO;
import com.lockpick.DTO.OrdineEvasoDTO;
import com.lockpick.model.Prodotto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.lockpick.model.Catalogo;
import com.lockpick.service.CarrelloService;
import com.lockpick.service.CatalogoService;
import com.lockpick.service.CheckoutService;
import com.lockpick.service.Convert;
import com.lockpick.service.OrdineService;
import com.lockpick.service.ProdottoService;

@RestController
public class CheckoutController {

	@Autowired
	private CheckoutService checkoutService;
	
	@Autowired
	private CarrelloService carrelloService;
	
	@Autowired
	private CatalogoService catalogoService;
	
	@Autowired
	private ProdottoService prodottoService;
	
	@Autowired
	private OrdineService ordineService;
	
	@Autowired
	private Convert convertService;
	
	@GetMapping("/api/ordine-evaso/{idOrdine}")
	public ResponseEntity<?> getOrdineEvaso(@PathVariable("idOrdine") Integer idOrdine){
		
		List<OrdineEvasoDTO> ordineEvaso = checkoutService.getOrdineEvaso(idOrdine);
		
		return ResponseEntity.ok().body(ordineEvaso);
	}

	@GetMapping("/api/checkout/{idUser}")
	public ResponseEntity<?> creaOrdineEvaso(@PathVariable("idUser") Integer idUser){
		List<CarrelloDTO> carrello = carrelloService.getAll(idUser);
		
		carrello.forEach(tupla -> {
			//CICLO MIGLIORABILE CAMBIANDO LA QUERY DI ESTRAZIONE DEL CARRELLO
			
			//prendo l'id prodotto
			Integer idProd = tupla.getIdProdotto();
			//prendo la qta ordinata
			int qtaOrd = tupla.getQtaOrdinata();
			Prodotto prod = prodottoService.findByIdEntity(idProd);
			
			//mi salvo il riferimento all'entità catalogo a cui devo modificare la quantità
			Catalogo catDaMod = prod.getCatalogo();
			
			//cambio lo stato dell'ordine: da carrello a ordine
			prod.getOrdine().setCarrello(false);
			ordineService.update((OrdineDTO) convertService.convertToDTO(prod.getOrdine(), OrdineDTO.class));
			
			//aggiorno la data dell'ordine
			prod.getOrdine().setDataOrdine(new Date());
			
			//quantità disponibile - quantità ordinata
			catDaMod.setQtaProdotto(catDaMod.getQtaProdotto() - qtaOrd);
			
			//fisso l'effettivo prezzo pagato in prezzoPagato
			prod.setPrezzoPagato(catDaMod.getPrezzoProdotto());
			
			//aggiorno il DB
			catalogoService.update(catDaMod);
		});
		
		return ResponseEntity.ok().body(HttpStatus.CREATED);
	}
}
