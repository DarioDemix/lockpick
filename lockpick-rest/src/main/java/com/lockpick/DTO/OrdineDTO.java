package com.lockpick.DTO;

import java.util.Date;


public class OrdineDTO extends DTO{
	private Integer idOrdine;
	private Date dataOrdine;
	private boolean carrello;
	private Integer userId;
	
	//Contructors
	public OrdineDTO() {}

	public OrdineDTO(Integer idOrdine, Date dataOrdine, boolean carrello, Integer userId) {
		super();
		this.idOrdine = idOrdine;
		this.dataOrdine = dataOrdine;
		this.carrello = carrello;
		this.userId = userId;
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

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "OrdineDTO [idOrdine=" + idOrdine + ", dataOrdine=" + dataOrdine + ", userId=" + userId + "]";
	}

}
