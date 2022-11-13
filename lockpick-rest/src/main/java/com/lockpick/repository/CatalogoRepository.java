package com.lockpick.repository;

import java.util.List;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.lockpick.model.Catalogo;

@Repository("catalogoRepository")
public interface CatalogoRepository extends JpaRepository<Catalogo, Integer>{
	
	/*Query repository nativa SQL
	@Query(value="SELECT * FROM catalogo WHERE catalogo.prezzo_prodotto < 100", nativeQuery = true)
	List<Catalogo> findAllFromCatalogo();
	*/
	@Query(value = "SELECT * FROM catalogo ORDER BY id_catalogo DESC LIMIT ?,?", nativeQuery = true)
	List<Catalogo> getCatalogoDesc(@Param("lastKey") Integer lastKey, @Param("batch") Integer batch);
	
	@Query("FROM Catalogo c WHERE c.nomeProdotto LIKE concat(:stringa,'%')")
	List<Catalogo> ricercaProdotto(@Param("stringa") String stringa);
	
	//mettere il parametro stringa per primo
	@Query(value="SELECT * FROM catalogo WHERE nome_prodotto LIKE %?% LIMIT ?,?", nativeQuery=true)
	List<Catalogo> ricercaTutti(@Param("stringa") String stringa,
								@Param("lastKey") int lastKey,
								@Param("batch") int batch);

	
	//Gestione filtri
	//query con tutto
	@Query(value="select catalogo.*\r\n" + 
				"from catalogo\r\n" + 
				"inner join categoria on categoria.id_categoria = catalogo.fk_id_categoria\r\n" + 
				"inner join produttore on produttore.id_produttore = catalogo.fk_id_produttore \r\n" + 
				"where categoria.id_categoria = ? \r\n" + 
				"and produttore.id_produttore = ? \r\n" + 
				"and catalogo.prezzo_prodotto \r\n" + 
				"between ? and ?\r\n" + 
				"limit ?,?;", nativeQuery= true)
	List<Catalogo> getProdottiFiltrati(@Param("idCategoria") Integer idCategoria,
									   @Param("idProduttore") Integer idProduttore,
									   @Param("pMin") int pMin,
									   @Param("pMax") int pMax,
									   @Param("lastKey") int lastKey,
									   @Param("batch") int batch);
	//query senza categoria
	@Query(value="select catalogo.*\r\n" + 
			"from catalogo\r\n" + 
			"inner join produttore on produttore.id_produttore = catalogo.fk_id_produttore \r\n" + 
			"where produttore.id_produttore = ? \r\n" + 
			"and catalogo.prezzo_prodotto \r\n" + 
			"between ? and ?\r\n" + 
			"limit ?,?;", nativeQuery= true)
	List<Catalogo> getProdottiFiltrati(@Param("idProduttore") Integer idProduttore,
										   @Param("pMin") int pMin,
										   @Param("pMax") int pMax,
										   @Param("lastKey") int lastKey,
										   @Param("batch") int batch);
	//query senza produttore
	@Query(value="select catalogo.*\r\n" + 
			"from catalogo\r\n" + 
			"inner join categoria on categoria.id_categoria = catalogo.fk_id_categoria\r\n" +  
			"where categoria.id_categoria = ? \r\n" +
			"and catalogo.prezzo_prodotto \r\n" + 
			"between ? and ?\r\n" + 
			"limit ?,?;", nativeQuery= true)
	List<Catalogo> getFiltroNoProd(@Param("idCategoria") Integer idCategoria,
								   @Param("pMin") int pMin,
								   @Param("pMax") int pMax,
								   @Param("lastKey") int lastKey,
								   @Param("batch") int batch);
	//query solo prezzo
	@Query(value="select catalogo.*\r\n" +
			"from catalogo\r\n" +
			"where catalogo.prezzo_prodotto \r\n" +
			"between ? and ?\r\n" +
			"limit ?,?;", nativeQuery = true)
	List<Catalogo> getProdottiFiltrati(@Param("pMin") int pMin, 
									   @Param("pMax") int pMax,
									   @Param("lastKey") int lastKey,
									   @Param("batch") int batch);
	
	@Query(value="select catalogo.*\r\n" +
				 "from catalogo\r\n" +
				 "where catalogo.fk_id_categoria = ?\r\n" +
				 "and catalogo.id_catalogo not like ?\r\n" +
				 "limit ?,?", nativeQuery= true)
	List<Catalogo> getFiltroCategoria(@Param("idCategoria") int idCategoria,
									  @Param("idCatalogo")int idCatalogo,
									  @Param("lastKey") int lastKey,
			   						  @Param("batch") int batch);
	
	@Query(value="select catalogo.*\r\n" +
			 "from catalogo\r\n" +
			 "where catalogo.fk_id_produttore = ?\r\n" +
			 "and catalogo.id_catalogo not like ?\r\n" +
			 "limit ?,?", nativeQuery= true)
	List<Catalogo> getFiltroProduttore(@Param("idProduttore") int idProduttore,
									   @Param("idCatalogo")int idCatalogo,
								 	   @Param("lastKey") int lastKey,
								 	   @Param("batch") int batch);
		
}
