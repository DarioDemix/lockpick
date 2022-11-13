package com.lockpick.model;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="catalogo")
public class Catalogo extends EntityAbstr{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idCatalogo;
	@Column(nullable=false)
	private String nomeProdotto;
	@Column(nullable=false)
	private String descrProdotto;
	@Column(nullable=false)
	private float prezzoProdotto;
	@Column(nullable=false)
	private int qtaProdotto;
	@Lob
	@Column(nullable=true)
	private byte[] img;

	@OneToMany(mappedBy = "catalogo", cascade = CascadeType.ALL)
	Set<Prodotto> prodotto = new HashSet<Prodotto>();
	
	@ManyToOne //molti a uno con produttore
	@JoinColumn(name="fk_id_produttore", nullable=false)
	private Produttore produttore;
	
	@ManyToOne //molti a uno con categoria
	@JoinColumn(name="fk_id_categoria", nullable=false)
	private Categoria categoria;
	
	//Costruttori
	public Catalogo() {}
	
	public Catalogo(Integer idCatalogo, String nomeProdotto, String descrProdotto, float prezzoProdotto,
			int qtaProdotto, byte[] img, Produttore produttore, Categoria categoria) {
		super();
		this.idCatalogo = idCatalogo;
		this.nomeProdotto = nomeProdotto;
		this.descrProdotto = descrProdotto;
		this.prezzoProdotto = prezzoProdotto;
		this.qtaProdotto = qtaProdotto;
		this.img = img;
		this.produttore = produttore;
		this.categoria = categoria;
	}
	
	
	//SETTERS AND GETTERS
	public Integer getIdCatalogo() {
		return idCatalogo;
	}

	public void setIdCatalogo(Integer idCatalogo) {
		this.idCatalogo = idCatalogo;
	}

	public String getNomeProdotto() {
		return nomeProdotto;
	}

	public void setNomeProdotto(String nomeProdotto) {
		this.nomeProdotto = nomeProdotto;
	}

	public String getDescrProdotto() {
		return descrProdotto;
	}

	public void setDescrProdotto(String descrProdotto) {
		this.descrProdotto = descrProdotto;
	}

	public float getPrezzoProdotto() {
		return prezzoProdotto;
	}

	public void setPrezzoProdotto(float prezzoProdotto) {
		this.prezzoProdotto = prezzoProdotto;
	}

	public int getQtaProdotto() {
		return qtaProdotto;
	}

	public void setQtaProdotto(int qtaProdotto) {
		this.qtaProdotto = qtaProdotto;
	}
	public byte[] getImg() {
		return img;
	}

	public void setImg(byte[] img) {
		this.img = img;
	}

	public Produttore getProduttore() {
		return produttore;
	}

	public void setProduttore(Produttore produttore) {
		this.produttore = produttore;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	
}
