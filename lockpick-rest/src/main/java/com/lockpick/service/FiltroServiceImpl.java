package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.CatalogoDTO;
import com.lockpick.DTO.DTO;
import com.lockpick.model.Catalogo;
import com.lockpick.repository.CatalogoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("filtroService")
public class FiltroServiceImpl implements FiltroService {
	
	@Autowired
	private CatalogoRepository catalogoRepository;
	
	@Autowired
	private Convert convertService;

	@Override
	public List<DTO> getProdottiFiltrati(Integer idCategoria,
										 Integer idProduttore,
										 int pMin, int pMax,
										 int lastKey, int batch) {
		List<Catalogo> list = catalogoRepository.getProdottiFiltrati(idCategoria, idProduttore, pMin, pMax, lastKey, batch);
		return convertService.convertToListDTO(list, CatalogoDTO.class);
	}

	//senza categoria
	@Override
	public List<DTO> getProdottiFiltrati(Integer idProduttore, int pMin, int pMax, int lastKey, int batch) {
		List<Catalogo> list = catalogoRepository.getProdottiFiltrati(idProduttore, pMin, pMax, lastKey, batch);
		return convertService.convertToListDTO(list, CatalogoDTO.class);
	}

	@Override
	public List<DTO> getProdottiFiltrati(int pMin, int pMax, int lastKey, int batch,Integer idCategoria) {
		List<Catalogo> list = catalogoRepository.getFiltroNoProd(idCategoria, pMin, pMax, lastKey, batch);
		return convertService.convertToListDTO(list, CatalogoDTO.class);
	}
	
	@Override
	public List<DTO>getProdottiFiltrati(int pMin, int pMax, int lastKey, int batch){
		List<Catalogo> list = catalogoRepository.getProdottiFiltrati(pMin, pMax, lastKey, batch);
		return convertService.convertToListDTO(list, CatalogoDTO.class);
	}
	
	@Override
	public List<DTO> getFiltroCategoria(int idCategoria, int idCatalogo, int lastKey, int batch){
		List<Catalogo> list = catalogoRepository.getFiltroCategoria(idCategoria, idCatalogo, lastKey,batch);
		return convertService.convertToListDTO(list, CatalogoDTO.class);
	}

	@Override
	public List<DTO> getFiltroProduttore(int idProduttore, int idCatalogo, int lastKey, int batch) {
		List<Catalogo> list = catalogoRepository.getFiltroProduttore(idProduttore, idCatalogo, lastKey,batch);
		return convertService.convertToListDTO(list, CatalogoDTO.class);
	}
}
