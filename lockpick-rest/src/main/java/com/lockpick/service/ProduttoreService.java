package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.ProduttoreDTO;
import com.lockpick.model.Produttore;

public interface ProduttoreService {
	
	//definizione del CRUD
	public ProduttoreDTO create(Produttore p);
	public List<?> getAll();
	public ProduttoreDTO getOne(Integer id);
	public void update(Produttore p);
	public void delete(Integer id);
}
