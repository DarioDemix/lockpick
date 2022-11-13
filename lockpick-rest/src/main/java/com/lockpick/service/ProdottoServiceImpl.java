package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.DTO;
import com.lockpick.DTO.ProdottoDTO;
import com.lockpick.model.Prodotto;
import com.lockpick.repository.CatalogoRepository;
import com.lockpick.repository.OrdineRepository;
import com.lockpick.repository.ProdottoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("prodottoService")
public class ProdottoServiceImpl implements ProdottoService{

	@Autowired
	ProdottoRepository prodottoRepository;
	
	@Autowired
	CatalogoRepository catalogoRepository;
	
	@Autowired
	OrdineRepository ordineRepository;
	
	@Autowired
	Convert convertService;
	
	//GET: restituisce tutti i prodotti presenti nel DB
	@Override
	public List<?> getAll(){
		return convertService.convertToListDTO(prodottoRepository.findAll(), ProdottoDTO.class);
	}
	
	//GET: restituisce un prodotto in base all'id
	@Override
	public DTO findById(Integer id) {
		DTO prodottoDTO = convertService.convertToDTO(prodottoRepository.findById(id).get(), ProdottoDTO.class);
		return prodottoDTO;
	}
	
	@Override
	public Prodotto findByIdEntity(Integer id) {
		Prodotto prodotto = prodottoRepository.findById(id).get();
		return prodotto;
	}
	
	//POST: aggiunge un'istanza dell'entità prodotto
	@Override
	public DTO add(ProdottoDTO prodottoDTO) {
		Prodotto prodotto = (Prodotto) convertService.convertToEntity(prodottoDTO, Prodotto.class);
		if(catalogoRepository.existsById(prodotto.getCatalogo().getIdCatalogo()))
		{
			prodottoRepository.save(prodotto);
			return convertService.convertToDTO(prodotto, ProdottoDTO.class);
		}
		return null;
	}
	
	@Override
	//Overload di add
	public DTO add(Prodotto prodotto) {
		if(catalogoRepository.existsById(prodotto.getCatalogo().getIdCatalogo()))
		{
			prodottoRepository.save(prodotto);
			return convertService.convertToDTO(prodotto, ProdottoDTO.class);
		}
		return null;
	}

	//PUT: modifica un'istanza dell'entità prodotto
	@Override
	public ProdottoDTO update(ProdottoDTO prodottoDTO) {
		Prodotto prodotto = (Prodotto) convertService.convertToEntity(prodottoDTO, Prodotto.class);
		Prodotto oldProdotto = prodottoRepository.findById(prodotto.getIdProdotto()).get();
		oldProdotto.setIdProdotto(prodotto.getIdProdotto());
		oldProdotto.setCatalogo(prodotto.getCatalogo());
		oldProdotto.setOrdine(prodotto.getOrdine());
		oldProdotto.setQtaOrdinata(prodotto.getQtaOrdinata());
		prodottoRepository.flush();
		return prodottoDTO;
	}
	
	public ProdottoDTO update(Prodotto prodotto) {
		Prodotto oldProdotto = prodottoRepository.findById(prodotto.getIdProdotto()).get();
		oldProdotto.setIdProdotto(prodotto.getIdProdotto());
		oldProdotto.setCatalogo(prodotto.getCatalogo());
		oldProdotto.setOrdine(prodotto.getOrdine());
		oldProdotto.setQtaOrdinata(prodotto.getQtaOrdinata());
		prodottoRepository.flush();
		return (ProdottoDTO) convertService.convertToDTO(prodotto, ProdottoDTO.class);
	}
	
	//DELETE: elimina un'istanza dell'entità prodotto
	@Override
	public void delete(Integer id) {
		Prodotto prodotto = prodottoRepository.getOne(id);
		prodottoRepository.delete(prodotto);
	}
}
