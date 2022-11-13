package com.lockpick.DTO;

public class ProduttoreDTO extends DTO{

	private Integer idProduttore;
	private String nomeProduttore;
	
	public ProduttoreDTO() {}
	
	public ProduttoreDTO(Integer idProduttore, String nomeProduttore) {
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
