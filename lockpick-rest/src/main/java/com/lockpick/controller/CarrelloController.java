package com.lockpick.controller;

import java.util.Date;
import java.util.List;

import com.lockpick.DTO.CarrelloDTO;
import com.lockpick.DTO.CatalogoDTO;
import com.lockpick.DTO.OrdineDTO;
import com.lockpick.DTO.ProdottoDTO;
import com.lockpick.model.Ordine;
import com.lockpick.model.User;
import com.lockpick.service.Convert;
import com.lockpick.service.OrdineService;
import com.lockpick.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lockpick.model.Catalogo;
import com.lockpick.service.CarrelloService;

@RestController
public class CarrelloController {

	@Autowired
	private CarrelloService carrelloService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private OrdineService ordineService;
	
	@Autowired
	private Convert convertService;
	
	//Estrae il carrello dello user dal DB
	@GetMapping("api/carrello/{idUser}")
	public ResponseEntity<?> getCarrelli(@PathVariable("idUser") Integer idUser){
		List<CarrelloDTO> listaCarrelloDTO = carrelloService.getAll(idUser);
		return ResponseEntity.ok().body(listaCarrelloDTO);
	}
	
	//cerca un carrello in base all'id user
	//se il carrello non esiste lo crea
	@GetMapping("/api/ordine-carrello/{idUser}")
	public ResponseEntity<?> cercaCarrello(@PathVariable("idUser")Integer idUser){
		OrdineDTO oDTO = carrelloService.getCarrelloByIdUser(idUser);
		User u = userService.findEntityById(idUser);
		if(u == null)
			//dà un NullPoinerException ma funziona
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		else if(oDTO == null)
			oDTO = (OrdineDTO) ordineService.add(new Ordine(new Date(), true, u));
			
		return ResponseEntity.ok().body(oDTO);
	}
	
	//aggiunge un prodotto al carrello
	//o modifica la quantità se il prodotto già esiste nel carrello
	//da spostare i controlli nel FE
	@PostMapping("api/carrello/aggiungi")
	public ResponseEntity<?> addToCart(@RequestParam("idUser") Integer idUser, 
									   @RequestParam("qta") Integer qta,
									   @RequestBody CatalogoDTO catalogoDTO){
		
		//controlle se esiste un carrello
		OrdineDTO oDTO = carrelloService.getCarrelloByIdUser(idUser);
		
		//controllo se esiste il prodotto nel carrello
		Catalogo c = (Catalogo) convertService.convertToEntity(catalogoDTO, Catalogo.class);
		
		//il controllo del prodotto viene effettuato all'interno del metodo
		ProdottoDTO pReturn = carrelloService.aggiungiOModifica(oDTO.getIdOrdine(), c, qta);
		return ResponseEntity.ok().body(pReturn);
	}
	
	//controlla la quantità presente nel carrello di un determinato prodotto
	@GetMapping("api/qtaCarrello")
	public Integer getQtaCarrello(@RequestParam("idCatalogo") Integer idCatalogo,
							  @RequestParam("idOrdine") Integer idOrdine) {
		Integer qta = carrelloService.getQtaCarrello(idCatalogo, idOrdine);
		
		if(qta == null) return 0;
		
		return qta;
	}
	
	@GetMapping("/api/carrello/exsist")
	public OrdineDTO getCarrelloByIdUser(@RequestParam("idUser") Integer idUser) {
		return carrelloService.getCarrelloByIdUser(idUser);
	}
}