package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.CatalogoDTO;
import com.lockpick.DTO.DTO;
import com.lockpick.repository.CatalogoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.lockpick.model.Catalogo;

@Service("catalogoService")
public class CatalogoServiceImpl implements CatalogoService{

	@Autowired
	CatalogoRepository catalogoRepository;
	
	@Autowired
	Convert convertService;
	
	//GET: restituisce tutti i cataloghi
		@Override
		public List<?> getListaCompleta(){
			return convertService.convertToListDTO(catalogoRepository.findAll(), CatalogoDTO.class);
		}
	
	//GET: restituisce una porzione di cataloghi
	@Override
	public List<?> getAll(Integer lastKey, Integer batch){
		return convertService.convertToListDTO(catalogoRepository.getCatalogoDesc(lastKey, batch), CatalogoDTO.class);
	}
	
	//GET: restituisce un catalogo in base all'id
	@Override
	public DTO findById(Integer id) {
		Catalogo catalogo = catalogoRepository.findById(id).get();
		//possibilmente rimuovere il casting
		return convertService.convertToDTO(catalogo, CatalogoDTO.class);
	}
	
	//POST: aggiunge un'istanza della entità catalogo
	@Override
	public DTO add(Catalogo catalogo) {
		Catalogo catalogoCreated =  catalogoRepository.save(catalogo);
		return convertService.convertToDTO(catalogoCreated, CatalogoDTO.class);
	}

	//PUT: modifica un'istanza della entità catalogo
	@Override
	public void update(Catalogo catalogo) {
		Catalogo oldCatalogo = catalogoRepository.findById(catalogo.getIdCatalogo()).get();
		oldCatalogo.setIdCatalogo(catalogo.getIdCatalogo());
		oldCatalogo.setNomeProdotto(catalogo.getNomeProdotto());
		oldCatalogo.setDescrProdotto(catalogo.getDescrProdotto());
		oldCatalogo.setPrezzoProdotto(catalogo.getPrezzoProdotto());
		oldCatalogo.setQtaProdotto(catalogo.getQtaProdotto());
		oldCatalogo.setCategoria(catalogo.getCategoria());
		oldCatalogo.setProduttore(catalogo.getProduttore());
		catalogoRepository.flush();
	}
	
	//PUT: modifica un record aggiungendo l'immagine
	@Override
	public Integer updateImg(Integer id, byte[] imgBlob) {
		Catalogo catalogo = catalogoRepository.findById(id).get();
		catalogo.setImg(imgBlob);
		catalogoRepository.flush();
		return catalogo.getIdCatalogo();
	}
	
	//DELETE: elimina un'istanza dell'entità catalogo
	@Override
	public void delete(Integer id) {
		Catalogo catalogo = catalogoRepository.getOne(id);
		catalogoRepository.delete(catalogo);
	}
	
	//ordina i prodotti dal meno costoso al più
	public List<?> orderByASC(){
		return convertService.convertToListDTO(catalogoRepository
										.findAll(new Sort(Sort.Direction.ASC, "prezzoProdotto")), CatalogoDTO.class);
	}

	@Override
	public List<?> orderByDESC() {
		return convertService.convertToListDTO(catalogoRepository.findAll(new Sort(Sort.Direction.DESC, "prezzoProdotto")), CatalogoDTO.class);
	}

	@Override
	public List<Catalogo> ricercaProdotto(String stringa) {
			return this.catalogoRepository.ricercaProdotto(stringa);
	}
	
	@Override
	public List<Catalogo> ricercaTutti(String stringa,int lastKey,int batch){
		return this.catalogoRepository.ricercaTutti(stringa,lastKey, batch);
	}
	
	/*public CatalogoDTO convertToDTO(Catalogo catalogo) {
		ModelMapper modelMapper = new ModelMapper();
		return modelMapper.map(catalogo, CatalogoDTO.class);
	}
	
	public Catalogo convertToEntity(CatalogoDTO catalogoDTO) {
		ModelMapper modelMapper = new ModelMapper();
		return modelMapper.map(catalogoDTO, Catalogo.class);
	}*/
	
}