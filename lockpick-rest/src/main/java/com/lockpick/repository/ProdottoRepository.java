package com.lockpick.repository;

import java.util.List;

import com.lockpick.DTO.CarrelloDTO;
import com.lockpick.DTO.OrdineEvasoDTO;
import com.lockpick.DTO.QtaInCarrelloDTO;
import com.lockpick.model.Prodotto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository("prodottoRepository")
public interface ProdottoRepository extends JpaRepository<Prodotto, Integer>{
	
	@Query("from Prodotto p " +
			"where p.ordine.idOrdine = :idOrdine")
	public Prodotto findByIdOrdine(@Param("idOrdine") Integer idOrdine);
	
	//CARRELLO
	@Query(value = "SELECT new com.lockpick.DTO.CarrelloDTO(p.idProdotto, o.idOrdine, c.nomeProdotto, c.prezzoProdotto, p.qtaOrdinata," +
			   "c.img, c.idCatalogo) " + 
			   "FROM Prodotto p " +
			   "INNER JOIN Ordine o " +
			   "ON o.idOrdine = p.ordine.idOrdine " + 
			   "INNER JOIN User u " +
			   "ON u.idUser = o.user.idUser " +
			   "INNER JOIN Catalogo c " +
			   "ON c.idCatalogo = p.catalogo.idCatalogo " + 
			   "WHERE o.user.idUser = :idUserParam AND o.carrello = true", nativeQuery = false)
		public List<CarrelloDTO> getCarrelloByIdUser(@Param("idUserParam") Integer idUser);

	//Query per calcolare il totale parziale del carrello di uno user sul frontend
	@Query("SELECT c.prezzoProdotto, p.qtaOrdinata " + 
			"FROM Prodotto p " + 
			"INNER JOIN Ordine o " + 
			"ON o.idOrdine = p.ordine.idOrdine " + 
			"INNER JOIN Catalogo c " + 
			"ON c.idCatalogo = p.catalogo.idCatalogo " + 
			"WHERE o.user.idUser = :idUser AND o.carrello = true")
	public List<Object[]> getPrezzoEQuantita(@Param("idUser")Integer idUser);
	
	//controllo fatto lato frontend
	@Query(value="SELECT new com.lockpick.DTO.QtaInCarrelloDTO(p.idProdotto, p.qtaOrdinata) " +
				"FROM Prodotto p " + 
				"INNER JOIN Ordine o " + 
				"ON o.idOrdine = p.ordine.idOrdine " + 
				"WHERE p.ordine.idOrdine = :idOrdine AND p.catalogo.idCatalogo = :idCatalogo AND o.carrello = 1", nativeQuery = false)
	public List<QtaInCarrelloDTO> controllaProdotto(@Param("idOrdine") Integer idOrdine, @Param("idCatalogo") Integer idCatalogo);

	
	//ORDINE EVASO
	
	//estra l'ordine evaso di uno user in base all'id ordine
	@Query("SELECT new com.lockpick.DTO.OrdineEvasoDTO(c.idCatalogo, o.idOrdine, o.dataOrdine, c.nomeProdotto, " +
			"c.prezzoProdotto, p.qtaOrdinata, c.img) " + 
			"FROM Prodotto p " + 
			"INNER JOIN Ordine o " + 
			"ON o.idOrdine = p.ordine.idOrdine " + 
			"INNER JOIN Catalogo c " + 
			"ON c.idCatalogo = p.catalogo.idCatalogo " + 
			"WHERE o.carrello = 0 AND o.idOrdine= :idOrdine")
	public List<OrdineEvasoDTO> getOrdineEvaso(@Param("idOrdine") Integer idOrdine);

	//estra tutti gli ordini evasi di uno user per lo storico ordini
	@Query("SELECT new com.lockpick.DTO.OrdineEvasoDTO(c.idCatalogo, o.idOrdine, o.dataOrdine, c.nomeProdotto, " +
			"p.prezzoPagato, p.qtaOrdinata, c.img) " + 
			"FROM Prodotto p " + 
			"INNER JOIN Ordine o " + 
			"ON o.idOrdine = p.ordine.idOrdine " + 
			"INNER JOIN Catalogo c " + 
			"ON c.idCatalogo = p.catalogo.idCatalogo " + 
			"WHERE o.user.idUser= :idUser AND o.carrello = 0 " +
			"ORDER BY o.idOrdine ")
	public List<OrdineEvasoDTO> getStorico(@Param("idUser") Integer idUser);
	
	@Query("SELECT p.qtaOrdinata FROM Prodotto p "+
		   "WHERE p.catalogo.idCatalogo = :idCatalogo AND p.ordine.idOrdine = :idOrdine")
	public Integer getQtaCarrello(@Param("idCatalogo") Integer idCatalogo, 
							  @Param("idOrdine") Integer idOrdine);
}
