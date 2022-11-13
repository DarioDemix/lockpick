package com.lockpick.repository;

import java.util.List;

import com.lockpick.model.Ordine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository("Ordine")
public interface OrdineRepository extends JpaRepository<Ordine, Integer>{
	
	//Metodo che controlla se esiste un carrello di un dato user
	@Query("FROM Ordine o " +
		   "WHERE o.carrello = true AND o.user.idUser = :idUserParam")
	public Ordine getCarrelloByIdUser(@Param("idUserParam") Integer idUser);
	
	
	//Metodo che gli ordini evasi di un dato user
	@Query(value = "SELECT id_ordine " +
		   "FROM ordine " +
		   "WHERE carrello = 0 AND ordine.fk_iduser = ? "+
		   "ORDER BY id_ordine DESC " +
		   "LIMIT ?,? ", nativeQuery = true) 
	public List<Integer> getOrdineByIdUser(@Param("idUserParam") Integer idUser,
										   @Param("lastKey") Integer lastKey,
										   @Param("batch") Integer batch);
}
