package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.CategoriaDTO;
import com.lockpick.model.Categoria;

public interface CategoriaService {
	//Definizione CRUD
	public CategoriaDTO create(Categoria c);
	public List<?> getAll();
	public CategoriaDTO getOne(Integer id);
	public void update (Categoria c);
	public void delete (Integer id);
}
