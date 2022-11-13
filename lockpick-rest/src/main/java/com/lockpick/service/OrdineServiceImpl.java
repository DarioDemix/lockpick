package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.DTO;
import com.lockpick.DTO.OrdineDTO;
import com.lockpick.model.Ordine;
import com.lockpick.repository.OrdineRepository;
import com.lockpick.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("ordineService")
public class OrdineServiceImpl implements OrdineService{
	
	@Autowired
	OrdineRepository ordineRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	Convert convertService;
	
	//GET: restituisce tutti gli ordini presenti nel DB
	@Override
	public List<?> getAll(){
		List<?> list = ordineRepository.findAll();
		return convertService.convertToListDTO(list, OrdineDTO.class);
	}
	
	//GET: restituisce un ordine in base all'id
	@Override
	public DTO findById(Integer id) {
		Ordine ordine = ordineRepository.findById(id).get();
		//conversione a DTO
		return convertService.convertToDTO(ordine, OrdineDTO.class);
	}
	
	@Override
	public Ordine findEntityById(Integer id) {
		return ordineRepository.findById(id).get(); 
	}
	
	//POST: aggiunge un'istanza dell'entità ordine
	@Override
	public DTO add(Ordine ordine) {
		//Se l'id dello User inserito nel corpo della richiesta esiste, si procede con il 
		//salvataggio del record.
		if(userRepository.existsById(ordine.getUser().getIdUser())) {
			ordineRepository.saveAndFlush(ordine);
			return convertService.convertToDTO(ordine, OrdineDTO.class);
		}
		//Se non esiste uno user col dato id, Ritorna un id equivalente a 0
		else {
			return null;
		}

	}

	//PUT: modifica un'entità ordine
	@Override
	public void update(OrdineDTO ordineDTO) {
		//casting per specificare che l'EntityAbstr è un ordine
		Ordine ordine = (Ordine) convertService.convertToEntity(ordineDTO, Ordine.class);
		Ordine oldOrdine = ordineRepository.findById(ordine.getIdOrdine()).get();
		oldOrdine.setIdOrdine(ordine.getIdOrdine());
		oldOrdine.setDataOrdine(ordine.getDataOrdine());
		//cambio lo user dentro l'ordine
		oldOrdine.setUser(userRepository.findById(ordineDTO.getUserId()).get());
		ordineRepository.flush();
	}
	
	//DELETE: elimina un'istanza dell'entità user
	@Override
	public void delete(Integer id) {
		Ordine ordine = ordineRepository.getOne(id);
		ordineRepository.delete(ordine);
	}

	//Pesca tutti gli id degli ordini evasi da uno user
	@Override
	public List<Integer> getOrdiniEvasi(Integer idUser, Integer lastKey, Integer batch) {
			
			List<Integer> idOrdini = ordineRepository.getOrdineByIdUser(idUser, lastKey, batch);
			
		return idOrdini;
	}
	
}
