package com.lockpick.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.NavigableMap;
import java.util.TreeMap;

import com.lockpick.DTO.OrdineEvasoDTO;
import com.lockpick.repository.ProdottoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("storicoService")
public class StoricoServiceImpl implements StoricoService{
	
	@Autowired
	private ProdottoRepository prodottoRepository;
	
	@Autowired
	private OrdineService ordineService;
	
	public List<OrdineEvasoDTO> getStorico(Integer idUser){
		
		List<OrdineEvasoDTO> storico = prodottoRepository.getStorico(idUser);
		
		return storico;
	}
	
	//ORDINAMENTO STORICO
	
	//DA COMMENTARE
	public NavigableMap<Integer, List<OrdineEvasoDTO>> getStoricoOrdinato(Integer idUser, Integer lastKey, Integer batch) {
		List<Integer> listaIdOrdini = ordineService.getOrdiniEvasi(idUser, lastKey, batch);
		TreeMap<Integer, List<OrdineEvasoDTO>> mappa = new TreeMap<Integer,List<OrdineEvasoDTO>>();
		
		//cicla gli idOrdine per costruire la mappa
		listaIdOrdini.forEach(idOrdine -> {
			putMappaOrdini(mappa,idOrdine,idUser);
		});
			
		return mappa.descendingMap();
	}
	
	//Metodo che aggiunge una singola mappatura di un ordine
	
	public List<OrdineEvasoDTO> putMappaOrdini(Map<Integer, List<OrdineEvasoDTO>> mappa, Integer idOrdine, Integer idUser){
		List<OrdineEvasoDTO> storico = prodottoRepository.getStorico(idUser);
		
		//oggetto d'appoggio
		List<OrdineEvasoDTO> ordineSingolo = new ArrayList<OrdineEvasoDTO>();
		
		storico.forEach(tupla ->{
			if(tupla.getIdOrdine() == idOrdine) {
				ordineSingolo.add(tupla);
			}
		});
		mappa.put(idOrdine, ordineSingolo);
		return ordineSingolo;
	}

}
