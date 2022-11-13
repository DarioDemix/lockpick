package com.lockpick.controller;

import java.util.List;

import com.lockpick.DTO.CategoriaDTO;
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

import com.lockpick.model.Categoria;
import com.lockpick.service.CategoriaService;

@RestController
public class CategoriaController {
	@Autowired
	private CategoriaService categoriaService;
	
	@PostMapping("/api/categoria")
	public CategoriaDTO create(@RequestBody Categoria c) {
		return categoriaService.create(c);
	}
	@GetMapping("/api/categoria")
	public List<?> getAll(){
		return categoriaService.getAll();
	}
	@GetMapping("/api/categoria/{id}")
	public CategoriaDTO getOne(@PathVariable("id") Integer id) {
		return categoriaService.getOne(id);
	}
	@PutMapping("/api/categoria")
	public ResponseEntity<?> update(@RequestBody Categoria c){
		categoriaService.update(c);
		return ResponseEntity.ok(HttpStatus.OK);
	}
	@DeleteMapping("/api/categoria/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id){
		categoriaService.delete(id);
		return ResponseEntity.ok(HttpStatus.OK);
	}
}
