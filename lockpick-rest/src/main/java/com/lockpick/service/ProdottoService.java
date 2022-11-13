package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.DTO;
import com.lockpick.DTO.ProdottoDTO;
import com.lockpick.model.Prodotto;

public interface ProdottoService {
	
	public List<?> getAll();
	
	public DTO findById(Integer id);
	
	public DTO add(ProdottoDTO prodottoDTO);
	
	public DTO add(Prodotto prodotto);
	
	public ProdottoDTO update(ProdottoDTO prodottoDTO);
	
	public ProdottoDTO update(Prodotto prodotto);
	
	public void delete (Integer id);

	Prodotto findByIdEntity(Integer id);
}
