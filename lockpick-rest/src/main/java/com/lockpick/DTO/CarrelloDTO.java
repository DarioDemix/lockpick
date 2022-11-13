package com.lockpick.DTO;

public class CarrelloDTO {
	
	private Integer idProdotto; // da prodotto (fondamentale per eliminare un prodotto dal carrello)
	private Integer idOrdine; //da ordine
	private String nomeProdotto; //da catalogo
	private Float prezzoProdotto; //da catalogo
	private Integer qtaOrdinata; //da prodotto (tabella di legame)
	private byte[] img; //da catalogo;
	private Integer idCatalogo; //da catalogo
	
	public CarrelloDTO(Integer idProdotto, Integer nOrdine, String nomeProdotto, Float prezzo, Integer qtaOrdinata, byte[] img, Integer idCatalogo) {
		super();
		this.idProdotto = idProdotto;
		this.idOrdine = nOrdine;
		this.nomeProdotto = nomeProdotto;
		this.prezzoProdotto = prezzo;
		this.qtaOrdinata = qtaOrdinata;
		this.img = img;
		this.setIdCatalogo(idCatalogo);
	}

	public Integer getIdProdotto() {
		return idProdotto;
	}


	public void setIdProdotto(Integer idProdotto) {
		this.idProdotto = idProdotto;
	}


	public Integer getIdOrdine() {
		return idOrdine;
	}

	public void setIdOrdine(Integer nOrdine) {
		this.idOrdine = nOrdine;
	}

	public String getNomeProdotto() {
		return nomeProdotto;
	}

	public void setNomeProdotto(String nomeProdotto) {
		this.nomeProdotto = nomeProdotto;
	}

	public Float getPrezzoProdotto() {
		return prezzoProdotto;
	}

	public void setPrezzoProdotto(float prezzo) {
		this.prezzoProdotto = prezzo;
	}

	public Integer getQtaOrdinata() {
		return qtaOrdinata;
	}

	public void setQtaOrdinata(int qtaOrdinata) {
		this.qtaOrdinata = qtaOrdinata;
	}

	public byte[] getImg() {
		return img;
	}

	public void setImg(byte[] img) {
		this.img = img;
	}

	public Integer getIdCatalogo() {
		return idCatalogo;
	}

	public void setIdCatalogo(Integer idCatalogo) {
		this.idCatalogo = idCatalogo;
	}

}
