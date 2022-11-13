package com.lockpick.repository;

import com.lockpick.model.Produttore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("produttoreRepository")
public interface ProduttoreRepository extends JpaRepository<Produttore, Integer>{

}
