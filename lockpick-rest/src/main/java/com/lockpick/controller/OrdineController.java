package com.lockpick.controller;

import java.util.List;

import com.lockpick.DTO.DTO;
import com.lockpick.DTO.OrdineDTO;
import com.lockpick.model.Ordine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.lockpick.service.Convert;
import com.lockpick.service.OrdineService;

@RestController
public class OrdineController {
	
	@Autowired
	private OrdineService ordineService;
	
	@Autowired
	Convert convertService;
	
	
	//lista degli ordini
	@GetMapping("/api/ordine")
	public ResponseEntity<List<?>> list(){
		List<?> list = ordineService.getAll();
		return ResponseEntity.ok().body(list);
	}
	
	//ordine singolo
	@GetMapping("/api/ordine/{idordine}")
	public ResponseEntity<?> findOne(@PathVariable("idordine") Integer id){
		//Se l'ordine col dato ID non esiste viene catturata l'eccezione e viene restituito
		//l'errore 404
		try {
		DTO ordine = ordineService.findById(id);
		return ResponseEntity.ok().body(ordine);
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("L'ordine con il dato ID non esiste");
		}
	}
	
	//aggiunge un ordine
	//Nel body è INUTILE chiedere i campi dello user che non siano l'ID 
	@RequestMapping(value = "/api/ordine", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<?> save(@RequestBody OrdineDTO ordineDTO){
		Ordine ordine = (Ordine) convertService.convertToEntity(ordineDTO, Ordine.class);
		DTO ordineDTOCreated;
		//Se il valore di ritorno è 0 vuol dire che il record non può essere registrato
		//perché non esiste lo user
		if((ordineDTOCreated = ordineService.add(ordine)) != null) {
			//casting messo per poter accedere al metodo appartenente ad OrdineDTO
			return ResponseEntity.ok().body("Ordine effettuato correttamente con id: " + ((OrdineDTO) ordineDTOCreated).getIdOrdine());
		}
		//Invio dell'errore 404 con messaggio
		else{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Lo user con il dato ID non esiste.");
		}
	}
	
	//modifica un ordine
	@PutMapping("/api/ordine")
	public ResponseEntity<?> update(@RequestBody OrdineDTO ordineDTO){
		ordineService.update(ordineDTO);
		return ResponseEntity.ok().body("Ordine modificato!");
	}
	
	//elimina un ordine
	@DeleteMapping("/api/ordine/{idOrdine}")
	public ResponseEntity<?> delete(@PathVariable("idOrdine")Integer id){
		ordineService.delete(id);
		return ResponseEntity.ok().body("Ordine eliminato!");
	}
	
	//richiama gli ordini evasi di uno specifico user
	@GetMapping("/api/ordine/getOrdiniEvasi/{idUser}/{lastKey}/{batch}")
	public ResponseEntity<?> getOrdiniEvasi(@PathVariable("idUser")Integer idUser,
											@PathVariable("lastKey") Integer lastKey,
											@PathVariable("batch") Integer batch){
		
		List<Integer> idOrdini = ordineService.getOrdiniEvasi(idUser, lastKey, batch);
		
		return ResponseEntity.ok().body(idOrdini);
		
	}
}