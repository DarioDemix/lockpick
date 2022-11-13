package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.OrdineDTO;
import com.lockpick.DTO.OrdineEvasoDTO;
import com.lockpick.repository.ProdottoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("checkoutService")
public class CheckoutServiceImpl implements CheckoutService{

	@Autowired
	private ProdottoRepository prodottoRepository;
	
	@Override
	public OrdineDTO getOrdineDaPagare(Integer idUser) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<OrdineEvasoDTO> getOrdineEvaso(Integer idOrdine) {
		return prodottoRepository.getOrdineEvaso(idOrdine);	
	}
	
}
