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

@Entity
@Table(name="categoria")
public class Categoria extends EntityAbstr{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer idCategoria;
	@Column(nullable=false)
	private String nomeCategoria;
	//Relazione uno a molti con catalogo
	@OneToMany(mappedBy="categoria", cascade = CascadeType.ALL)
	Set<Catalogo> catalogo = new HashSet<Catalogo>();
	
	public Categoria() {}
	
	public Categoria(Integer idCategoria, String nomeCategoria) {
		super();
		this.idCategoria = idCategoria;
		this.nomeCategoria = nomeCategoria;
	}

	public Integer getIdCategoria() {
		return idCategoria;
	}

	public void setIdCategoria(Integer idCategoria) {
		this.idCategoria = idCategoria;
	}

	public String getNomeCategoria() {
		return nomeCategoria;
	}

	public void setNomeCategoria(String nomeCategoria) {
		this.nomeCategoria = nomeCategoria;
	}
	
	
}
