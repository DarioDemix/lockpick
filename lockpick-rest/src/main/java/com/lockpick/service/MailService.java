package com.lockpick.service;

import javax.mail.MessagingException;

public interface MailService {

	public void invioMail(String email, String pwdProvv, String username, String tipo) throws MessagingException;
}

