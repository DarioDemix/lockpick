package com.lockpick.controller;

import java.util.List;

import com.lockpick.DTO.DTO;
import com.lockpick.DTO.ProdottoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.lockpick.service.ProdottoService;

@RestController
public class ProdottoController {
	
	@Autowired
	private ProdottoService prodottoService;
	
	//lista dei prodotti
	@GetMapping("/api/prodotto")
	public ResponseEntity<List<?>> list(){
		List<?> list = prodottoService.getAll();
		return ResponseEntity.ok().body(list);
	}
	
	//prodotto singolo
	@GetMapping("/api/prodotto/{idprodotto}")
	public ResponseEntity<?> findOne(@PathVariable("idprodotto") Integer id){
		//Se l'ordine col dato ID non esiste viene catturata l'eccezione e viene restituito
		//l'errore 404
		try {
		DTO prodottoDTO = prodottoService.findById(id);
		return ResponseEntity.ok().body(prodottoDTO);
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Il prodotto con il dato ID non esiste.");
		}
	}
	
	//aggiunge un prodotto
	@PostMapping("/api/prodotto")
	public ResponseEntity<?> save(@RequestBody ProdottoDTO prodottoDTO){
		DTO prodottoCreated = prodottoService.add(prodottoDTO);
		return ResponseEntity.ok().body(prodottoCreated);
	}
	
	//modifica un prodotto
	@PutMapping("/api/prodotto")
	public ResponseEntity<?> update(@RequestBody ProdottoDTO prodottoDTO){
		prodottoService.update(prodottoDTO);
		return ResponseEntity.ok().body(HttpStatus.OK);
	}
	
	//elimina un prodotto
	@DeleteMapping("/api/prodotto/{idprodotto}")
	public ResponseEntity<?> delete(@PathVariable("idprodotto")Integer id){
		prodottoService.delete(id);
		return ResponseEntity.ok().body(id);
	}

}