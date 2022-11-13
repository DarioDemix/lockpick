package com.lockpick.DTO;

//Estensione del DTO minimizzato con l'inserimento
public class UserDTO extends DTO{
	
	private Integer idUser;
	private String username;
	private String email;
	private String password;
	private String nome;
	private String cognome;
	private String indirizzo;
	private String numeroCivico;
	private String citta;
	private int cap;
	private short amministratore;
	private String token;
	private boolean resetPassword = false;
	
	//Constructors
	public UserDTO() {}

	public UserDTO(Integer idUser, String username, String email, String password,
			String nome, String cognome, String indirizzo, String numeroCivico, 
			String citta, int cap, short amministratore, String token, boolean resetPassword) {
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

	public Integer getIdUser() {
		return this.idUser;
	}
	
	public void setIdUser(Integer idUser) {
		this.idUser = idUser;
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	@Override
	public String toString() {
		return "UserDTO [idUser=" + idUser + ", username=" + username + ", email=" + email + ", password=" + password
				+ ", nome=" + nome + ", cognome=" + cognome + ", indirizzo=" + indirizzo + ", numeroCivico=" + numeroCivico
				+ ", citta=" + citta + ", cap=" + cap + ", amministratore=" + amministratore + "token=" + token + "]";
	}
	
}
