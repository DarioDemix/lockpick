package com.lockpick.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User extends EntityAbstr{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idUser;
	@Column(nullable=false)
	private String username;
	@Column(nullable=false)
	private String email;
	@Column (nullable=false)
	private String password;
	@Column (nullable=false)
	private String nome;
	@Column (nullable=false)
	private String cognome;
	@Column (nullable=false)
	private String indirizzo;
	@Column (nullable=false)
	private String numeroCivico;
	@Column (nullable=false)
	private String citta;
	@Column (nullable=false)
	private int cap;
	@Column (nullable=false)
	private short amministratore;
	//token per l'autenticazione e le autorizzazioni
	@Column
	private String token;
	@Column(nullable=false)
	private boolean resetPassword;
	@OneToMany(fetch = FetchType.LAZY, mappedBy="user",cascade = CascadeType.ALL)
	Set<Ordine> ordine = new HashSet<Ordine>();
	
	//costruttori
	public User() {}
	
	public User(Integer idUser, String username, String email, String password, String nome, String cognome,
			String indirizzo, String numeroCivico, String citta, int cap, short amministratore, String token, boolean resetPassword) {
		super();
		this.idUser = idUser;
		this.username = username;
		this.email = email;
		this.password = password;
		this.nome = nome;
		this.cognome = cognome;
		this.indirizzo = indirizzo;
		this.numeroCivico = numeroCivico;
		this.citta = citta;
		this.cap = cap;
		this.amministratore = amministratore;
		this.token = token;
		this.resetPassword = resetPassword;
	}
	
	
	//SETTERS AND GETTERS
	
	public Integer getIdUser() {
		return idUser;
	}
	public void setIdUser(Integer idUser) {
		this.idUser = idUser;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public String getIndirizzo() {
		return indirizzo;
	}
	public void setIndirizzo(String indirizzo) {
		this.indirizzo = indirizzo;
	}
	public String getNumeroCivico() {
		return numeroCivico;
	}
	public void setNumeroCivico(String numeroCivico) {
		this.numeroCivico = numeroCivico;
	}
	public String getCitta() {
		return citta;
	}
	public void setCitta(String citta) {
		this.citta = citta;
	}
	public int getCap() {
		return cap;
	}
	public void setCap(int cap) {
		this.cap = cap;
	}
	public short getAmministratore() {
		return amministratore;
	}
	public void setAmministratore(short amministratore) {
		this.amministratore = amministratore;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}

	public boolean isResetPassword() {
		return resetPassword;
	}

	public void setResetPassword(boolean resetPassword) {
		this.resetPassword = resetPassword;
	}

	//toString
	@Override
	public String toString() {
		return "User [iduser=" + idUser + ", username=" + username + ", email=" + email + ", password=" + password
				+ ", nome=" + nome + ", cognome=" + cognome + ", indirizzo=" + indirizzo + ", numeroCivico=" + numeroCivico
				+ ", citta=" + citta + ", cap=" + cap + ", amministratore=" + amministratore + "token=" + token + "]";
	}

}
