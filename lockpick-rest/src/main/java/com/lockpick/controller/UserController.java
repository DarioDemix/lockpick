package com.lockpick.controller;

import java.util.List;

import javax.mail.MessagingException;

import com.lockpick.DTO.DTO;
import com.lockpick.DTO.UserDTO;
import com.lockpick.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.lockpick.service.Convert;
import com.lockpick.service.MailService;
import com.lockpick.service.PwdGenService;
import com.lockpick.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private Convert convertService;
	
	@Autowired
	private PwdGenService pwdGenService;
	
	@Autowired
	private MailService mailService;
	
	//lista degli user
	@GetMapping("/api/user")
	public ResponseEntity<List<?>> list(){
		List<?> list = userService.getAll();
		return ResponseEntity.ok().body(list);
	}
	
	//user singolo
	@GetMapping("/api/user/{iduser}")
	public ResponseEntity<?> findOne(@PathVariable("iduser") Integer id){
		//se l'utente col dato id non esiste viene catturata l'eccezione e all'utente viene
		//restituito l'errore 404
		try {
			DTO user = userService.findById(id);
			return ResponseEntity.ok().body(user);
		}
		catch(Exception e)
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("L'utente con il dato ID non esiste.");
		}
		
	}
	
	//aggiunge uno user
	@PostMapping("/api/user")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<?> save(@RequestBody UserDTO userDTO){
		User user = (User) convertService.convertToEntity(userDTO, User.class);
		userService.add(user);
		
		//invio mail all'utente
		try {
			mailService.invioMail(user.getEmail(), "", user.getUsername(), "registrazione");
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
		
		return ResponseEntity.ok(user);
		
	}
	
	//modifica uno user
	//Sarebbe meglio modificare il record mettendo l'id nell'URL
	@PutMapping("/api/user/{idUser}")
	public ResponseEntity<?> update(@PathVariable("idUser") Integer idUser, @RequestBody UserDTO userDTO){
		userService.update(userDTO);
		return ResponseEntity.ok().body("User aggiornato!");
	}
	
	//elimina uno user
	@DeleteMapping("/api/user/{iduser}")
	public ResponseEntity<?> delete(@PathVariable("iduser")Integer id){
		userService.delete(id);
		return ResponseEntity.ok().body("User eliminato correttamente!");
	}
	
	//GESTIONE QUERY
	
	//GET: Ritorna true se lo username/email e la password esistono nel DB
	@PostMapping("/api/login")
	public ResponseEntity<?> Login(@RequestBody UserDTO userDTO){
		//conversione forse non necessaria
		User u = (User) convertService.convertToEntity(userDTO, User.class);
		User userDaInviare = userService.vericaLogin(u.getEmail(), u.getPassword());
		
		if(userDaInviare != null){
			return ResponseEntity.ok().body(userDaInviare);
		}else if((userDaInviare = userService.vericaLogin(u.getUsername(), u.getPassword())) != null){
			return ResponseEntity.ok().body(userDaInviare);
			}
		else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Utente non trovato");
		}
	}
	
	//Recupero password se l'email data dal frontend esiste nel DB
	@PostMapping ("/api/recuperoPwd")
	public ResponseEntity<?> RecuperoPwd(@RequestBody UserDTO userDTO){
		UserDTO u = userService.recuperoPwd(userDTO.getEmail());
		if(u != null) {
			//generazione pwd temporanea
			String pwdProvv = pwdGenService.generateCommonTextPassword();
			
			//cambio pwd nel db
			boolean esito = userService.cambioPwd(u.getIdUser(), pwdProvv);
			
			//invio pwd alla mail dell'utente
			try {
				mailService.invioMail(u.getEmail(), pwdProvv, userService.getUsernameByMail(u.getEmail()), "recupero");
			} catch (MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
			}
			
			return ResponseEntity.ok().body(esito);
		}
		else
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
	}
	
	//Resetta la password e setta a false il flag resetPassword
	@PostMapping("/api/resetPassword")
	public ResponseEntity<?> resetPwd(@RequestBody UserDTO userDTO){
		
		try {
		userDTO.setResetPassword(false);
		userService.update(userDTO);
		return ResponseEntity.ok(HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return ResponseEntity.ok(HttpStatus.NOT_MODIFIED);
	}
	
	@GetMapping("/api/user/checkEmail")
	public boolean checkEmail(@RequestParam("email")String _email) {
		if(this.userService.checkEmail(_email) != null)
			return true;
		return false;
	}
	
	@GetMapping("/api/user/checkUsername")
	public boolean checkUsername(@RequestParam("username")String username) {
		if(this.userService.checkUsername(username) != null)
			return true;
		return false;
	}
}
