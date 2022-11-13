package com.lockpick.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Table(name="produttore")
@Entity
public class Produttore extends EntityAbstr{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idProduttore;
	@Column(nullable=false)
	private String nomeProduttore;
	//Relazione uno a molti con Catalogo
	@OneToMany(mappedBy = "produttore", cascade = CascadeType.ALL)
	Set<Catalogo> catalogo = new HashSet<Catalogo>();
	
	public Produttore() {}
	
	public Produttore(Integer idProduttore, String nomeProduttore) {
		super();
		this.idProduttore = idProduttore;
		this.nomeProduttore = nomeProduttore;
	}

	public Integer getIdProduttore() {
		return idProduttore;
	}

	public void setIdProduttore(Integer idProduttore) {
		this.idProduttore = idProduttore;
	}

	public String getNomeProduttore() {
		return nomeProduttore;
	}

	public void setNomeProduttore(String nomeProduttore) {
		this.nomeProduttore = nomeProduttore;
	}
	
}
