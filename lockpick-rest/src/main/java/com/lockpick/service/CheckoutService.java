package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.OrdineDTO;
import com.lockpick.DTO.OrdineEvasoDTO;

public interface CheckoutService {

	public OrdineDTO getOrdineDaPagare(Integer idUser);
	
	public List<OrdineEvasoDTO> getOrdineEvaso(Integer idOrdine);
}
