package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.CarrelloDTO;
import com.lockpick.DTO.OrdineDTO;
import com.lockpick.DTO.ProdottoDTO;
import com.lockpick.DTO.QtaInCarrelloDTO;
import com.lockpick.model.Ordine;
import com.lockpick.model.Prodotto;
import com.lockpick.repository.OrdineRepository;
import com.lockpick.repository.ProdottoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lockpick.model.Catalogo;

@Service("carrelloService")
public class CarrelloServiceImpl implements CarrelloService {
	@Autowired
	private ProdottoRepository prodottoRepository;
	
	@Autowired
	private OrdineRepository ordineRepository;
	
	@Autowired
	private Convert convertService;
	
	@Autowired
	private ProdottoService prodottoService;
	

	@Override
	public List<CarrelloDTO> getAll(Integer idUser) {
		List<CarrelloDTO> carrelliDTO = prodottoRepository.getCarrelloByIdUser(idUser);
		return carrelliDTO;
	}

	@Override
	public OrdineDTO getCarrelloByIdUser(Integer idUser) {
		Ordine o = ordineRepository.getCarrelloByIdUser(idUser);
		if (o != null)
			return (OrdineDTO)convertService.convertToDTO(o, OrdineDTO.class);
		else
			return null;
	}
	
	@Override
	public Ordine getCarrelloByIdUserEntity(Integer idUser) {
		return ordineRepository.getCarrelloByIdUser(idUser);
	}
		
	@Override
	//effettua il controllo sul prodotto e decide se crearne uno nuovo o aggiungere la qtaOrdinata
	public ProdottoDTO aggiungiOModifica(Integer idOrdine, Catalogo c, int qtaOpz) {
		List<QtaInCarrelloDTO> risultatoQuery = prodottoRepository.controllaProdotto(idOrdine, c.getIdCatalogo());
		int qta;
		if(!risultatoQuery.isEmpty()) {
			
			qta = risultatoQuery.get(0).getQta();
			
			//esiste già, modifica solo qtaOrdinata
			Integer idProdotto = risultatoQuery.get(0).getIdProdotto();
			Prodotto p = prodottoRepository.getOne(idProdotto);
			if(c.getQtaProdotto() < (qta+qtaOpz)) {
				p.setQtaOrdinata(c.getQtaProdotto());
			}else {
				p.setQtaOrdinata(qta+qtaOpz);
			}
			p.setIdProdotto(idProdotto);
			return prodottoService.update(p);
		}else {
			
			//aggiungi record
			Prodotto p = new Prodotto(qtaOpz, c, ordineRepository.getOne(idOrdine));
			return (ProdottoDTO) prodottoService.add(p);
		}
	}
	
	@Override
	public Integer getQtaCarrello(Integer idCatalogo, Integer idOrdine) {
		return prodottoRepository.getQtaCarrello(idCatalogo, idOrdine);
	}
}
