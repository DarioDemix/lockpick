package com.lockpick.DTO;

public class ProdottoDTO extends DTO{
	
	private Integer idProdotto;
	private int qtaOrdinata;
	private float prezzoPagato;
	private Integer idCatalogo;
	private Integer ordineIdOrdine;
	
	//Contructors
	public ProdottoDTO() {}

	public ProdottoDTO(Integer idProdotto, int qtaOrdinata, float prezzoPagato, Integer idCatalogo, Integer ordineIdOrdine) {
		super();
		this.idProdotto = idProdotto;
		this.qtaOrdinata = qtaOrdinata;
		this.prezzoPagato = prezzoPagato;
		this.idCatalogo = idCatalogo;
		this.ordineIdOrdine = ordineIdOrdine;
	}

	public Integer getIdProdotto() {
		return idProdotto;
	}

	public void setIdProdotto(Integer idProdotto) {
		this.idProdotto = idProdotto;
	}

	public Integer getIdCatalogo() {
		return idCatalogo;
	}

	public void setIdCatalogo(Integer idCatalogo) {
		this.idCatalogo = idCatalogo;
	}

	public Integer getOrdineIdOrdine() {
		return ordineIdOrdine;
	}

	public void setOrdineIdOrdine(Integer ordineIdOrdine) {
		this.ordineIdOrdine = ordineIdOrdine;
	}
	
	public int getQtaOrdinata() {
		return qtaOrdinata;
	}

	public void setQtaOrdinata(int qtaOrdinata) {
		this.qtaOrdinata = qtaOrdinata;
	}
	
	public float getPrezzoPagato() {
		return this.prezzoPagato;
	}
	
	public void setPrezzoPagato(float prezzoPagato) {
		this.prezzoPagato = prezzoPagato;
	}

	@Override
	public String toString() {
		return "ProdottoDTO [idProdotto=" + idProdotto + ", idCatalogo=" + idCatalogo + ", ordineIdOrdine="
				+ ordineIdOrdine + "]";
	}
	

}
