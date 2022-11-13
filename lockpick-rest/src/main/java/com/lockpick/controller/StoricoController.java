package com.lockpick.controller;

import java.util.List;
import java.util.NavigableMap;

import com.lockpick.DTO.OrdineEvasoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.lockpick.service.StoricoService;

@RestController
public class StoricoController {

	@Autowired
	private StoricoService storicoService;
	
	@GetMapping("/api/storico/{idUser}")
	public ResponseEntity<?> getStorico(@PathVariable("idUser") Integer idUser){
		List<OrdineEvasoDTO> storico = storicoService.getStorico(idUser);
		return ResponseEntity.ok().body(storico);
	}
	
	@GetMapping("/api/storico/{idUser}/{lastKey}/{batch}")
	@JsonSerialize
	public ResponseEntity<?>/*NavigableMap<Integer, List<OrdineEvasoDTO>>*/ getStoricoOrdinato(@PathVariable("idUser") Integer idUser,
												@PathVariable("lastKey") Integer lastKey,
												@PathVariable("batch") Integer batch){
		
		NavigableMap<Integer, List<OrdineEvasoDTO>> storico = storicoService.getStoricoOrdinato(idUser, lastKey, batch);
		
		if(storico.isEmpty())
			return ResponseEntity.ok(null);
		
		return ResponseEntity.ok(storico.values());
		
	}
	
}
