package com.lockpick.controller;

import java.util.List;

import com.lockpick.DTO.ProduttoreDTO;
import com.lockpick.model.Produttore;
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

import com.lockpick.service.ProduttoreService;

@RestController
public class ProduttoreController {
	
	@Autowired
	private ProduttoreService produttoreService;
	
	@PostMapping("/api/produttore")
	public ResponseEntity<?> add(@RequestBody Produttore p){
		ProduttoreDTO pDTO = produttoreService.create(p);
		return ResponseEntity.ok(pDTO);
	}
	
	@GetMapping("/api/produttore")
	public ResponseEntity<?> getAll(){
		List<?> listDTO = produttoreService.getAll();
		return ResponseEntity.ok(listDTO);
	}
	
	@GetMapping("/api/produttore/{id}")
	public ResponseEntity<?> getOne(@PathVariable("id") Integer id){
		ProduttoreDTO pDTO = produttoreService.getOne(id);
		return ResponseEntity.ok(pDTO);
	}
	
	@PutMapping("/api/produttore")
	public ResponseEntity<?> update(@RequestBody Produttore p){
		produttoreService.update(p);
		return ResponseEntity.ok(HttpStatus.OK);
	}
	
	@DeleteMapping("/api/produttore/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id){
		produttoreService.delete(id);
		return ResponseEntity.ok(HttpStatus.OK);
	}
}
