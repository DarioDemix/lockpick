package com.lockpick.DTO;

//Classe che serve ESCLUSIVAMENTE per la query che estrae l'idProdotto e la qtaOrdinata da prodotto
public class QtaInCarrelloDTO {

	private Integer idProdotto;
	private int qta;
	
	public QtaInCarrelloDTO() {}
 	
	public QtaInCarrelloDTO(Integer idProdotto, int qta) {
		super();
		this.idProdotto = idProdotto;
		this.qta = qta;
	}
	
	public Integer getIdProdotto() {
		return idProdotto;
	}
	public void setIdProdotto(Integer idProdotto) {
		this.idProdotto = idProdotto;
	}
	public int getQta() {
		return qta;
	}
	public void setQta(int qta) {
		this.qta = qta;
	}
	
	
}
