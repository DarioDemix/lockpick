package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.DTO;
import com.lockpick.DTO.OrdineDTO;
import com.lockpick.model.Ordine;

public interface OrdineService {
	
	public List<?> getAll();
	
	public DTO findById(Integer id);
	
	public DTO add(Ordine ordine);
	
	public void update(OrdineDTO ordineDTO);
	
	public void delete (Integer id);

	Ordine findEntityById(Integer id);
	
	List<Integer> getOrdiniEvasi(Integer idUser, Integer lastKey, Integer batch);
	
	//public Ordine convertToEntity(OrdineDTO ordineDTO);
	
	//public List<OrdineDTO> convertToListDTO(List<Ordine> list);
}
