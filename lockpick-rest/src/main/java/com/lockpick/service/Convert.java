package com.lockpick.service;

import java.util.List;


import com.lockpick.DTO.DTO;
import com.lockpick.model.EntityAbstr;

public interface Convert {

	public DTO convertToDTO(EntityAbstr entity, Class<?> dest);
	
	public EntityAbstr convertToEntity(DTO dto, Class<?> dest);
	
	public List<DTO> convertToListDTO(List<?> list, Class<?> dest);   
}
