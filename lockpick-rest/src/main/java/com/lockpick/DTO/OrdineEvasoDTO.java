package com.lockpick.DTO;

import java.util.Date;

public class OrdineEvasoDTO {

	private Integer idCatalogo;
	private Integer idOrdine;
	private Date dataOrdine;
	private String nomeProdotto;
	private float prezzoPagato;
	private int qtaOrdinata;
	private byte[] img;
	
	public OrdineEvasoDTO() {}
	
	public OrdineEvasoDTO(Integer idCatalogo, Integer idOrdine, Date dataOrdine, String nomeProdotto, float prezzoPagato, int qtaOrdinata,
			byte[] img) {
		super();
		this.idCatalogo = idCatalogo;
		this.idOrdine = idOrdine;
		this.dataOrdine = dataOrdine;
		this.nomeProdotto = nomeProdotto;
		this.prezzoPagato = prezzoPagato;
		this.qtaOrdinata = qtaOrdinata;
		this.img = img;
	}

	public Integer getIdCatalogo() {
		return idCatalogo;
	}

	public void setIdCatalogo(Integer idCatalogo) {
		this.idCatalogo = idCatalogo;
	}

	public Integer getIdOrdine() {
		return idOrdine;
	}

	public void setIdOrdine(Integer idOrdine) {
		this.idOrdine = idOrdine;
	}

	public Date getDataOrdine() {
		return dataOrdine;
	}

	public void setDataOrdine(Date dataOrdine) {
		this.dataOrdine = dataOrdine;
	}

	public String getNomeProdotto() {
		return nomeProdotto;
	}

	public void setNomeProdotto(String nomeProdotto) {
		this.nomeProdotto = nomeProdotto;
	}

	public float getPrezzoPagato() {
		return prezzoPagato;
	}

	public void setPrezzoPagato(float prezzoPagato) {
		this.prezzoPagato = prezzoPagato;
	}

	public int getQtaOrdinata() {
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
	
}

