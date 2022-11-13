package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.DTO;

public interface FiltroService {
	public List<DTO> getProdottiFiltrati(Integer idCategoria,
										 Integer idProduttore,
										 int pMin,
										 int pMax,
										 int lastKey,
										 int batch);
	//senza categoria
	public List<DTO> getProdottiFiltrati(Integer idProduttore,
													 int pMin,
													 int pMax,
													 int lastKey,
													 int batch);
	//senza produttore
	public List<DTO> getProdottiFiltrati(int pMin,
										 int pMax,
										 int lastKey,
										 int batch,
										 Integer idCategoria);
	//solo prezzo
	public List<DTO> getProdottiFiltrati(int pMin, int pMax, int lastKey, int batch);
	
	public List<DTO> getFiltroCategoria(int idCategoria, int idCatalogo, int lastKey, int batch);
	
	public List<DTO> getFiltroProduttore(int idProduttore, int idCatalogo, int lastKey, int batch);
}
