package com.lockpick.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lockpick.service.FiltroService;

@RestController
public class FiltroController {

	
	@Autowired
	private FiltroService filtroService;
	
	//filtro completo di tutto
	@GetMapping("/api/filtro")
	public List<?> getProdottiFiltrati(@RequestParam Integer idCategoria,
											  @RequestParam Integer idProduttore,
											  @RequestParam int pMin,
											  @RequestParam int pMax,
											  @RequestParam int lastKey,
											  @RequestParam int batch){
		List<?> list = filtroService.getProdottiFiltrati(idCategoria, idProduttore, pMin, pMax, lastKey, batch);
		return list;
	}

	//filtro senza categoria
	@GetMapping("/api/filtroNoCat")
	public List<?> getFiltroSenzaCategoria(@RequestParam Integer idProduttore,
											  @RequestParam int pMin,
											  @RequestParam int pMax,
											  @RequestParam int lastKey,
											  @RequestParam int batch){
		List<?> list = filtroService.getProdottiFiltrati(idProduttore, pMin, pMax, lastKey, batch);
		return list;
	}
	
	//filtro senza produttore
	@GetMapping("/api/filtroNoProd")
	public List<?> getFiltroSenzaProduttore(@RequestParam int pMin,
											  @RequestParam int pMax,
											  @RequestParam int lastKey,
											  @RequestParam int batch,
											  @RequestParam Integer idCategoria){
		List<?> list = filtroService.getProdottiFiltrati(pMin, pMax, lastKey, batch, idCategoria);
		return list;
	}
	
	@GetMapping("/api/filtroSoloPrezzo")
	public List<?> getFiltroSoloPrezzo(@RequestParam int pMin,
									   @RequestParam int pMax,
									   @RequestParam int lastKey,
									   @RequestParam int batch){
		List<?> list = filtroService.getProdottiFiltrati(pMin, pMax, lastKey, batch);
		return list;
	}
	
	@GetMapping("/api/filtroSimiliCategoria")
	public List<?> getFiltroCategoria(@RequestParam int idCategoria,
									  @RequestParam int idCatalogo,
									  @RequestParam int lastKey,
									  @RequestParam int batch){
		List<?> list = filtroService.getFiltroCategoria(idCategoria, idCatalogo, lastKey, batch);
		return list;
	}
	
	@GetMapping("/api/filtroSimiliProduttore")
	public List<?> getFiltroProduttore(@RequestParam int idProduttore,
									   @RequestParam int idCatalogo,
									   @RequestParam int lastKey,
									   @RequestParam int batch){
		List<?> list = filtroService.getFiltroProduttore(idProduttore, idCatalogo, lastKey, batch);
		return list;
	}
}

