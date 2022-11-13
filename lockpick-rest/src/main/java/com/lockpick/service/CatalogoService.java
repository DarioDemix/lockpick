package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.DTO;
import com.lockpick.model.Catalogo;

public interface CatalogoService {
	
	public List<?> getAll(Integer lastKey, Integer batch);
	
	public List<?> getListaCompleta();
	
	public DTO findById(Integer id);
	
	public DTO add(Catalogo catalogo);
	
	public void update(Catalogo catalogo);
	
	public Integer updateImg(Integer id, byte[] imgBlob);
	
	public void delete (Integer id);
	
	public List<?> orderByASC();
	
	public List<?> orderByDESC();
	
	public List<Catalogo> ricercaProdotto(String stringa);
	
	public List<Catalogo> ricercaTutti(String stringa, int lastKey, int batch);
}
