package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.CarrelloDTO;
import com.lockpick.DTO.OrdineDTO;
import com.lockpick.DTO.ProdottoDTO;
import com.lockpick.model.Catalogo;
import com.lockpick.model.Ordine;

public interface CarrelloService {

	/*RICORDA:
	un array di Object proveniente dalla join contiene per ogni sua cella una valore
	del record.
	Quindi obj[0] conterrà idOrdine,
	 	   obj[1] conterrà nomeProdotto
	 	   obj[2] conterrà prezzoProdotto
	 	   obj[3] conterrà qtaOrdinata
	 	   obj[4] conterrà img*/
	
	
	//trasforma tutti i record della join in un array di carrelli
	public List<CarrelloDTO> getAll(Integer idUser);
	
	//Controlla se esiste un ordine "carrello" nel DB in base all'idUser e lo restituisce.
	//Se non esiste lo crea prima di restituirlo.
	public OrdineDTO getCarrelloByIdUser(Integer idUser);
	
	public ProdottoDTO aggiungiOModifica(Integer idOrdine, Catalogo c, int qtaOpz);

	public Ordine getCarrelloByIdUserEntity(Integer idUser);
	
	public Integer getQtaCarrello(Integer idCatalogo, Integer idOrdine);
}
