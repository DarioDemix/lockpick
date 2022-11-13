package com.lockpick.service;

import java.util.List;

import com.lockpick.DTO.DTO;
import com.lockpick.DTO.UserDTO;
import com.lockpick.model.User;

public interface UserService {
	
	public List<?> getAll();
	
	public DTO findById(Integer id);
	
	public User findEntityById(Integer id);
	
	public DTO add(User user);
	
	public void update(UserDTO userDTO);
	
	public void delete (Integer id);
	
	public User vericaLogin(String email_username, String password);
	
	public User getByUsername(String username);
	
	public UserDTO recuperoPwd(String email);
	
	public boolean cambioPwd(Integer id, String pwd);
	
	public String getUsernameByMail(String mail);
	
	public String checkEmail(String email);
	
	public String checkUsername(String username);
}
