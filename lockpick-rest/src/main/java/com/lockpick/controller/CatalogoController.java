package com.lockpick.controller;

import java.io.IOException;
import java.util.List;

import com.lockpick.DTO.CatalogoDTO;
import com.lockpick.DTO.DTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.lockpick.model.Catalogo;
//import com.project.bozzaecommerce.service.BlobService;
import com.lockpick.service.CatalogoService;
import com.lockpick.service.Convert;

@RestController
public class CatalogoController {	
	@Autowired
	private CatalogoService catalogoService;
	
	@Autowired
	private Convert convertService;
	
	//lista dei cataloghi
	@GetMapping("/api/catalogo")
	public ResponseEntity<List<?>> list(@RequestParam Integer lastKey, @RequestParam Integer batch){
		List<?> list = catalogoService.getAll(lastKey,batch);
		
		return ResponseEntity.ok().body(list);
	}
	
	//lista completa cataloghi
	@GetMapping("/api/catalogo/all")
	public ResponseEntity<?> getListaCompleta(){
		List<?> list = this.catalogoService.getListaCompleta();
		return  ResponseEntity.ok(list);
	}
	
	//catalogo singolo
	@GetMapping("/api/catalogo/{idcatalogo}")
	public ResponseEntity<?> findOne(@PathVariable("idcatalogo") Integer id){
		//se il catalogo con il dato ID non esiste viene catturata l'eccezione e all'utente
		//viene restituito l'errore 404
		try {
		DTO catalogoDTO = catalogoService.findById(id);
		return ResponseEntity.ok().body(catalogoDTO);
		}catch(Exception e){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Il catalogo con il dato ID non esiste");
		}
	}
			
	//aggiunge un catalogo
	@PostMapping("/api/catalogo")
	public ResponseEntity<?> save(@RequestBody CatalogoDTO catalogo){
		Catalogo catDaSalvare = (Catalogo) convertService.convertToEntity(catalogo, Catalogo.class);
		CatalogoDTO catalogoDTO = (CatalogoDTO) catalogoService.add(catDaSalvare); 
		return ResponseEntity.ok().body(catalogoDTO);
	}
	
	//modifica un catalogo
	@PutMapping("/api/catalogo/{idcatalogo}")
	public ResponseEntity<?> update(@PathVariable("idcatalogo") Integer id, @RequestBody CatalogoDTO catalogoDTO){
		//cast per definire l'EntityAbstr come Catalogo
		Catalogo catalogo = (Catalogo) convertService.convertToEntity(catalogoDTO, Catalogo.class);
		catalogoService.update(catalogo);
		return ResponseEntity.ok().body(HttpStatus.OK);
	}
	
	//elimina un catalogo
	@DeleteMapping("/api/catalogo/{idcatalogo}")
	public ResponseEntity<?> delete(@PathVariable("idcatalogo")Integer id){
		catalogoService.delete(id);
		return ResponseEntity.ok().body(id);
	}
	
	//GESTIONE DELLE QUERY
	
	//query, prodotto dal meno al più costoso
	@GetMapping("/api/catalogo/ASC")
	public ResponseEntity<List<?>> piuCostoso(){
		List<?> list = catalogoService.orderByASC();
		return ResponseEntity.ok().body(list);
	}
	
	//query, prodotto dal più al meno costoso
	@GetMapping("/api/catalogo/DESC")
	public ResponseEntity<List<?>> menoCostoso(){
		List<?> list = catalogoService.orderByDESC();
		return ResponseEntity.ok().body(list);
	}
	
	//GESTIONE IMMAGINI
	
	//Inserisce una immagine ad un record già esistente
	@PutMapping("api/upload/{idcatalogo}")
	public ResponseEntity<?> imgUpdate(@PathVariable("idcatalogo") Integer id, @RequestParam("file") MultipartFile file){
		byte[] imgBlob;
		try {
			imgBlob = file.getBytes();
			catalogoService.updateImg(id, imgBlob);
			return ResponseEntity.ok().body(HttpStatus.ACCEPTED);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok().body(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping("api/ricerca")
	public ResponseEntity<List<Catalogo>> ricercaProdotto(@RequestParam("stringa") String stringa){
		List<Catalogo> lista = this.catalogoService.ricercaProdotto(stringa);
		return ResponseEntity.ok().body(lista);
	}
	
	@GetMapping("api/ricercaTutti")
	public ResponseEntity<List<Catalogo>> ricercaTutti(@RequestParam("lastKey") int lastKey,
													   @RequestParam("batch") int batch,
													   @RequestParam("stringa") String stringa){
		List<Catalogo> lista = this.catalogoService.ricercaTutti(stringa,lastKey,batch);
		return ResponseEntity.ok().body(lista);
	}
	
}