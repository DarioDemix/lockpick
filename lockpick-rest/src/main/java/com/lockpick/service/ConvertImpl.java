package com.lockpick.service;

import java.util.List;
import java.util.stream.Collectors;

import com.lockpick.DTO.DTO;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.lockpick.model.EntityAbstr;

@Service("convertService")
public class ConvertImpl implements Convert{
	
	@Autowired
	ModelMapper modelMapper;

	@Override
	public DTO convertToDTO(EntityAbstr entity, Class<?> dest) {
		//se l'entità passata è un catalogo, procedo con la conversione del campo immagine a base64
		/*if(entity instanceof Catalogo) {
			Catalogo catalogo = (Catalogo) entity;
			String imgBase64 = Base64.getUrlEncoder().encodeToString(catalogo.getImg());
			catalogo.setImgBase64(imgBase64);
			catalogo.setImg(null);
		}*/
		return (DTO) modelMapper.map(entity, dest);
	}

	@Override
	public EntityAbstr convertToEntity(DTO dto, Class<?> dest) {
		return (EntityAbstr) modelMapper.map(dto, dest);
	}

	@Override
	public List<DTO> convertToListDTO(List<?> list, Class<?> dest) {
			return list.stream()
					   .map(entityAbstr -> convertToDTO((EntityAbstr) entityAbstr, dest))
					   .collect(Collectors.toList());
	}	

}
