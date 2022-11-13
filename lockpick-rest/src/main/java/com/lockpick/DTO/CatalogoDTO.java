//prova swag per Git
package com.lockpick.DTO;

public class CatalogoDTO extends DTO{
	
	private Integer idCatalogo;
	private String nomeProdotto;
	private String descrProdotto;
	private float prezzoProdotto;
	private int qtaProdotto;
	private byte[] img;
	private Integer idProduttore;
	private Integer idCategoria;

	//Constructors
	public CatalogoDTO() {}

	public CatalogoDTO(Integer idCatalogo, String nomeProdotto, String descrProdotto, float prezzoProdotto,
			int qtaProdotto, byte[] img, Integer idProduttore, Integer idCategoria) {
		super();
		this.idCatalogo = idCatalogo;
		this.nomeProdotto = nomeProdotto;
		this.descrProdotto = descrProdotto;
		this.prezzoProdotto = prezzoProdotto;
		this.qtaProdotto = qtaProdotto;
		this.img = img;
		this.idProduttore = idProduttore;
		this.idCategoria = idCategoria;
	}

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

	public Integer getIdProduttore() {
		return idProduttore;
	}

	public void setIdProduttore(Integer idProduttore) {
		this.idProduttore = idProduttore;
	}

	public Integer getIdCategoria() {
		return idCategoria;
	}

	public void setIdCategoria(Integer idCategoria) {
		this.idCategoria = idCategoria;
	}

}
