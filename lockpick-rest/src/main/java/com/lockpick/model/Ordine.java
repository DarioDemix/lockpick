package com.lockpick.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;




@Entity
@Table(name="ordine")
public class Ordine extends EntityAbstr{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idOrdine;
	@Column(nullable=false)
	private Date dataOrdine;
	@Column(nullable=false)
	private boolean carrello;
	@ManyToOne //molti a uno con user
	@JoinColumn(name="fk_iduser", nullable=false) //campo della fk_iduser
	private User user;
	//Relazione uno a molti all'entità intermedia prodotto (derivante dalla relazione n a m tra ordine e catalogo)
	@OneToMany(mappedBy = "ordine", cascade = CascadeType.ALL)
	Set<Prodotto> prodotto = new HashSet<Prodotto>();
	
	
	public Ordine() {}
	
	public Ordine(Integer idOrdine, Date dataOrdine, boolean carrello, User user) {
		super();
		this.idOrdine = idOrdine;
		this.dataOrdine = dataOrdine;
		this.carrello = carrello;
		this.user = user;
	}
	
	//costruttore senza id (che viene generato automaticamente)
	public Ordine(Date dataOrdine, boolean carrello, User user) {
		this.dataOrdine = dataOrdine;
		this.carrello = carrello;
		this.user = user;
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
	
	public boolean isCarrello() {
		return carrello;
	}

	public void setCarrello(boolean carrello) {
		this.carrello = carrello;
	}

	public Integer getIdUser() {
		return user.getIdUser();
	}
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	@Override
	public String toString() {
		return "Ordine [idordine=" + idOrdine + ", dataordine=" + dataOrdine + ", user=" + this.user.toString() + "]";
	}


}
