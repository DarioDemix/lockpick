package com.lockpick.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="prodotto")
public class Prodotto extends EntityAbstr{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idProdotto;
	@Column(nullable = false)
	private int qtaOrdinata;
	@Column(nullable = false)
	private float prezzoPagato;
	@ManyToOne
	@JoinColumn(name="fk_idCatalogo",nullable=false)	
	private Catalogo catalogo;
	@ManyToOne
	@JoinColumn(name="fk_idOrdine",nullable=false)
	private Ordine ordine;
	
	//Costruttori
	public Prodotto() {}
	
	public Prodotto(Integer idProdotto, int qtaOrdinata, float prezzoPagato, Catalogo catalogo, Ordine ordine) {
		super();
		this.idProdotto = idProdotto;
		this.qtaOrdinata = qtaOrdinata;
		this.prezzoPagato = prezzoPagato;
		this.catalogo = catalogo;
		this.ordine = ordine;
	}
	
	public Prodotto(int qtaOrdinata, Catalogo catalogo, Ordine ordine) {
		this.idProdotto = null;
		this.qtaOrdinata = qtaOrdinata;
		this.catalogo = catalogo;
		this.ordine = ordine;
	}

	//setters and getters
	public Integer getIdProdotto() {
		return idProdotto;
	}

	public void setIdProdotto(Integer idProdotto) {
		this.idProdotto = idProdotto;
	}

	public Catalogo getCatalogo() {
		return catalogo;
	}

	public void setCatalogo(Catalogo catalogo) {
		this.catalogo = catalogo;
	}

	public Ordine getOrdine() {
		return ordine;
	}
	

	public void setOrdine(Ordine ordine) {
		this.ordine = ordine;
	}

	public int getQtaOrdinata() {
		return qtaOrdinata;
	}

	public void setQtaOrdinata(int qtaOrdinata) {
		this.qtaOrdinata = qtaOrdinata;
	}
	
	public float getPrezzoPagato() {
		return prezzoPagato;
	}
	
	public void setPrezzoPagato(float prezzoPagato) {
		this.prezzoPagato = prezzoPagato;
	}
}
