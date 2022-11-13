package com.lockpick.service;

import java.util.Objects;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;

@Service("mailService")
public class MailServiceImpl implements MailService{
	@Value("${smtp.email}")
	private String username;
	@Value("${smtp.password}")
	private String password; 
	
	public void invioMail(String email, String pwdProvv, String _username, String tipo) throws MessagingException {
		Properties prop = new Properties();
		prop.put("mail.smtp.auth", true);
		prop.put("mail.smtp.starttls.enable", "true");
		prop.put("mail.smtp.host", "smtp.gmail.com");
		prop.put("mail.smtp.port", "587");
		prop.put("mail.smtp.ssl.trust", "smtp.gmail.com");
	
		Session session = Session.getInstance(prop, new Authenticator() {
		    @Override
		    protected PasswordAuthentication getPasswordAuthentication() {
		        return new PasswordAuthentication(username, password);
		    }
		});
		
		Message message = new MimeMessage(session);
		message.setFrom(new InternetAddress("lockpick.eCommerce@gmail.com"));
		message.setRecipients(
		  Message.RecipientType.TO, InternetAddress.parse(email));
		message.setSubject("Lockpick staff");
		String loginUrl = "http://localhost:4200/login";
		 
		//prova HTML
		//String msg = "Ecco la pwd provvisoria: " + pwdProvv + "\nAccedi: http://localhost:4200/login";
		String msg;
		if(Objects.equals(tipo, "registrazione")) {
			msg = getMsgRegistrazione(loginUrl, _username);
		}else if(Objects.equals(tipo, "recupero")) {
			msg = getMsgRecuperoPsw(loginUrl, _username, pwdProvv);
		}else {
			msg="errore";
		}
		
		MimeBodyPart mimeBodyPart = new MimeBodyPart();
		mimeBodyPart.setContent(msg, "text/html");
		 
		Multipart multipart = new MimeMultipart();
		multipart.addBodyPart(mimeBodyPart);
		 
		message.setContent(multipart);
		 
		Transport.send(message);
	}
	
	//incapsulamento msg
	public String getMsgRecuperoPsw(String loginUrl, String _username, String pwdProvv){
		String msg= "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n" + 
				"<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n" + 
				"  <head>\r\n" + 
				"        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n" + 
				"        <title>A Simple Responsive HTML Email</title>\r\n" + 
				"        <style type=\"text/css\">\r\n" + 
				"        body {margin: 0; padding: 0; min-width: 100%!important;}\r\n" + 
				"        a {color: green;text-decoration: none;font-style:italic;}\r\n" + 
				"        a:hover {color: red;font-style:normal;}\r\n" +
				"        .scritte {color: black;text-align:center}\r\n" +
				"		 .password{font-style:italic;text-align:center;}\r\n" +
				"        .content {width: 100%; max-width: 600px;}  \r\n" + 
				"        </style>\r\n" + 
				"    </head>\r\n" + 
				"    <body yahoo bgcolor=\"#f6f8f1\">\r\n" + 
				"        <table width=\"100%\" bgcolor=\"#f6f8f1\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n" + 
				"            <tr>\r\n" + 
				"                <td>\r\n" + 
				"                    <table class=\"content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n" + 
				"                        <tr>\r\n" + 
				"                            <td>\r\n" + 
				"								 <div class=\"contenitore\">\r\n" +
				"                                <h2 class=\"scritte\">Ciao "+ _username +", ecco la tua password provvisoria: </h2><h2 class=\"password\">"+pwdProvv+"</h2><br/>\r\n" + 
				"								 <a style=\"text-align:center\" href=\""+loginUrl+"\"><h2>Accedi</h2></a><br/>\n" +
				"								 <h2 class=\"scritte\">Un saluto dallo staff di Lockpick!</h2>\r\n" +
				"								 </div>\r\n" +
				"                            </td>\r\n" + 
				"                        </tr>\r\n" + 
				"                    </table>\r\n" + 
				"                </td>\r\n" + 
				"            </tr>\r\n" + 
				"        </table>\r\n" + 
				"    </body>\r\n" + 
				"</html>";
		
		return msg;
	}
	
	public String getMsgRegistrazione(String loginUrl, String _username){
		String msg = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n" + 
				"<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n" + 
				"  <head>\r\n" + 
				"        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n" + 
				"        <title>A Simple Responsive HTML Email</title>\r\n" + 
				"        <style type=\"text/css\">\r\n" + 
				"        body {margin: 0; padding: 0; min-width: 100%!important;}\r\n" + 
				"        .content {width: 100%; max-width: 600px;}  \r\n" +
				"        .a {text-decoration:none;font-style:italic;}  \r\n" +
				"		 a:hover {color: red;font-style:normal;} \r\n" +
				"		 .scritte {text-align:center;color:black;} \r\n" +
				"        </style>\r\n" + 
				"    </head>\r\n" + 
				"    <body yahoo bgcolor=\"#f6f8f1\">\r\n" + 
				"        <table width=\"100%\" bgcolor=\"#f6f8f1\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n" + 
				"            <tr>\r\n" + 
				"                <td>\r\n" + 
				"                    <table class=\"content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n" + 
				"                        <tr>\r\n" + 
				"                            <td>\r\n" + 
				"								<div class=\"contieniAnchor\"> \r\n" +
				"								 <h2 class=\"scritte\">Ciao "+_username+", benvenuto in Lockpick!</h2>\r\n" + 
				"                                <h3 class=\"scritte\">Conferma il tuo account e comincia subito a fare acquisti!</h3>\r\n" +  
				"								<a style=\"text-align:center\" href=\"http://localhost:4200/login\"><h3>Click</h3></a>\r\n" + 
				"								</div> \r\n" +
				"                            </td>\r\n" + 
				"                        </tr>\r\n" + 
				"                    </table>\r\n" + 
				"                </td>\r\n" + 
				"            </tr>\r\n" + 
				"        </table>\r\n" + 
				"    </body>\r\n" + 
				"</html>";
				
		return msg;
	}
	
}