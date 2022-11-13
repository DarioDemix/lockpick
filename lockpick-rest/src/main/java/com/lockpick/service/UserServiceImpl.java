package com.lockpick.service;

import java.util.List;
import java.util.Optional;

import com.lockpick.DTO.DTO;
import com.lockpick.DTO.UserDTO;
import com.lockpick.model.User;
import com.lockpick.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements UserService{

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	Convert convertService;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	//GET: restituisce tutti gli users presenti nel DB
	@Override
	public List<?> getAll(){
		List<?> list = userRepository.findAll();
		return convertService.convertToListDTO(list, UserDTO.class);
	}
	
	//GET: restituisce uno user in base all'id
	@Override
	public DTO findById(Integer id) {
		User user = userRepository.findById(id).get();
		return convertService.convertToDTO(user, UserDTO.class);
	}
	
	@Override
	public User findEntityById(Integer id) {
		Optional<User> u = userRepository.findById(id);
		if(u.isPresent())
			return u.get();
		else 
			return null;
	}
	
	//POST: aggiunge un'entità user
	@Override
	public DTO add(User user) {
		
		//Codifica password
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		
		 User userCreated = userRepository.saveAndFlush(user);
		 return convertService.convertToDTO(userCreated, UserDTO.class);
	}

	//PUT: modifica un'entità user
	@Override
	public void update(UserDTO userDTO) {
		//cast per specificare che l'EntityAbstr è uno User
		User user = (User) convertService.convertToEntity(userDTO, User.class);
		User oldUser = userRepository.findById(user.getIdUser()).get();
		oldUser.setIdUser(user.getIdUser());
		oldUser.setUsername(user.getUsername());
		oldUser.setEmail(user.getEmail());
		oldUser.setPassword(passwordEncoder.encode(user.getPassword()));
		oldUser.setNumeroCivico(user.getNumeroCivico());
		oldUser.setCitta(user.getCitta());
		oldUser.setCap(user.getCap());
		oldUser.setAmministratore(user.getAmministratore());
		oldUser.setResetPassword(user.isResetPassword());
		userRepository.flush();
	}
	
	//DELETE: elimina un'istanza dell'entità user
	@Override
	public void delete(Integer id) {
		User user = userRepository.getOne(id);
		userRepository.delete(user);
	}

	//Se esiste uno user con email/username e pass nel db restituisce uno user, altrimenti nulla
	@Override
	public User vericaLogin(String email_username, String rawPassword) {
		User u = userRepository.loginUser(email_username);
		boolean logged = false;
		if(u != null){
			logged = passwordEncoder.matches(rawPassword, u.getPassword());
			if(logged) {
				return u; 
				}
			}
		return null;
	}

	@Override
	public User getByUsername(String username) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserDTO recuperoPwd(String email) {
		User u = userRepository.RecuperoPwd(email);
		//se l'utente non viene trovato nel DB non viene effettuata la conversione
		if(u == null)
			return null;
		
		return (UserDTO) convertService.convertToDTO(u, UserDTO.class);
	}

	@Override
	public boolean cambioPwd(Integer id, String pwd) {
			//sovrascrive la vecchia pwd con la nuova
			User u = userRepository.findById(id).get();
			u.setPassword(passwordEncoder.encode(pwd));
			u.setResetPassword(true);
			userRepository.flush();
		return true;
	}

	@Override
	public String getUsernameByMail(String mail) {
			return this.userRepository.getUsernameByMail(mail);
	}

	@Override
	public String checkEmail(String email) {
		return userRepository.checkEmail(email);
	}

	@Override
	public String checkUsername(String username) {
		return userRepository.checkUsername(username);
	}

	
}
