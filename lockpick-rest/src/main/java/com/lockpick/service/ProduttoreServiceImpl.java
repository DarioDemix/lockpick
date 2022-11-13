package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.ProduttoreDTO;
import com.lockpick.model.Produttore;
import com.lockpick.repository.ProduttoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("produttoreService")
public class ProduttoreServiceImpl implements ProduttoreService {

	@Autowired
	private ProduttoreRepository produttoreRepository;
	
	@Autowired
	private Convert convertService;
	
	@Override
	public ProduttoreDTO create(Produttore p) {
		this.produttoreRepository.save(p);
		return (ProduttoreDTO) this.convertService.convertToDTO(p, ProduttoreDTO.class);
	}

	@Override
	public List<?> getAll() {
		List<Produttore> list = this.produttoreRepository.findAll();
		return this.convertService.convertToListDTO(list, ProduttoreDTO.class);
	}

	@Override
	public ProduttoreDTO getOne(Integer id) {
		Produttore p = this.produttoreRepository.findById(id).get();
		return (ProduttoreDTO) convertService.convertToDTO(p, ProduttoreDTO.class);
	}

	@Override
	public void update(Produttore p) {
		Produttore oldProduttore = produttoreRepository.findById(p.getIdProduttore()).get();
		oldProduttore.setNomeProduttore(p.getNomeProduttore());
		produttoreRepository.saveAndFlush(oldProduttore);
		return;
	}

	@Override
	public void delete(Integer id) {
		produttoreRepository.deleteById(id);
	}

}
