package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.CategoriaDTO;
import com.lockpick.model.Categoria;
import com.lockpick.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("categoriaService")
public class CategoriaServiceImpl implements CategoriaService {

	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Autowired
	private Convert convertService;
	
	@Override
	public CategoriaDTO create(Categoria c) {
		categoriaRepository.save(c);
		return (CategoriaDTO) convertService.convertToDTO(c, CategoriaDTO.class);
	}

	@Override
	public List<?> getAll() {
		List<?> list = categoriaRepository.findAll();
		return convertService.convertToListDTO(list, CategoriaDTO.class);
	}

	@Override
	public CategoriaDTO getOne(Integer id) {
		Categoria c = categoriaRepository.findById(id).get();
		return (CategoriaDTO) convertService.convertToDTO(c, CategoriaDTO.class);
	}

	@Override
	public void update(Categoria c) {
		Categoria oldCategoria = categoriaRepository.findById(c.getIdCategoria()).get();
		oldCategoria.setNomeCategoria(c.getNomeCategoria());
		categoriaRepository.saveAndFlush(oldCategoria);
		return;
		
	}

	@Override
	public void delete(Integer id) {
		categoriaRepository.deleteById(id);
		return;
	}

}
