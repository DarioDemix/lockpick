package com.lockpick.service;

import java.util.List;
import java.util.NavigableMap;

import com.lockpick.DTO.OrdineEvasoDTO;

public interface StoricoService {

	
	public List<OrdineEvasoDTO> getStorico(Integer idUser);
	
	public NavigableMap<Integer, List<OrdineEvasoDTO>> getStoricoOrdinato(Integer idUser, Integer lastKey, Integer batch);
	
}
