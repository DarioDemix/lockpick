package com.lockpick.repository;

import com.lockpick.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Integer>{
	
	//query che estrapola uno user se la email e la pass passati come parametro esistono
	@Query("Select u FROM User u WHERE u.email = :email AND u.password = :password")
	public User findByEmailAndPasswordParam(@Param("email") String email, @Param("password") String password);

	@Query("Select u FROM User u "
			+ "WHERE u.username = :username AND u.password = :password")
	public User findByUsernameAndPasswordParam(@Param("username") String username, @Param("password") String password);
	
	//Recupero password: se la mail esiste estrapola uno User dal DB
	@Query("Select u FROM User u WHERE u.email = :email")
	public User RecuperoPwd(@Param("email") String email);
	
	@Query("SELECT u FROM User u WHERE u.username = :credenziale OR u.email = :credenziale")
	public User loginUser(@Param("credenziale") String credenziale);
	
	//TOKEN logic
	//public Optional<User> findByUsername(String username);
	
	//public Optional<User> findByToken(String token);
	
	@Query("SELECT username " +
		   "FROM User u " +
		   "WHERE u.email = :mail")
	public String getUsernameByMail(@Param("mail")String mail);
	
	@Query("SELECT email FROM User u WHERE u.email = :email")
	public String checkEmail(@Param("email")String email);
	
	@Query("SELECT username FROM User u WHERE u.username = :username")
	public String checkUsername(@Param("username")String username);
}
