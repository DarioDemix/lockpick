package com.lockpick.service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.text.RandomStringGenerator;
import org.springframework.stereotype.Service;

//Classe con la logica di generazione password randomiche, da commentare bene
@Service("pwdGenServiceImpl")
public class PwdGenServiceImpl implements PwdGenService {
	
	/* (non-Javadoc)
	 * @see com.project.bozzaecommerce.service.PwdGenService#generateRandomSpecialCharacters(int)
	 */
	@Override
	public String generateRandomSpecialCharacters(int length) {
	    RandomStringGenerator pwdGenerator = new RandomStringGenerator.Builder().withinRange(33, 45)
	        .build();
	    return pwdGenerator.generate(length);
	}
	
	/* (non-Javadoc)
	 * @see com.project.bozzaecommerce.service.PwdGenService#generateCommonTextPassword()
	 */
	@Override
	public String generateCommonTextPassword() {
		RandomStringGenerator gen = new RandomStringGenerator.Builder().withinRange(33, 45).build();
	    String pwString = generateRandomSpecialCharacters(2).concat(generateRandomNumbers(2))
	      .concat(generateRandomAlphabet(2, true))
	      .concat(generateRandomAlphabet(2, false))
	      .concat(generateRandomCharacters(2));
	    List<Character> pwChars = pwString.chars()
	      .mapToObj(data -> (char) data)
	      .collect(Collectors.toList());
	    Collections.shuffle(pwChars);
	    String password = pwChars.stream()
	      .collect(StringBuilder::new, StringBuilder::append, StringBuilder::append)
	      .toString();
	    return password;
	}
	
	 /* (non-Javadoc)
	 * @see com.project.bozzaecommerce.service.PwdGenService#generateRandomAlphabet(int, boolean)
	 */
	@Override
	public String generateRandomAlphabet(int length, boolean lowerCase) {
	        int low;
	        int hi;
	        if (lowerCase) {
	            low = 97;
	            hi = 122;
	        } else {
	            low = 65;
	            hi = 90;
	        }
	        RandomStringGenerator pwdGenerator = new RandomStringGenerator.Builder().withinRange(low, hi)
	            .build();
	        return pwdGenerator.generate(length);
	    }
	 
	   /* (non-Javadoc)
	 * @see com.project.bozzaecommerce.service.PwdGenService#generateRandomCharacters(int)
	 */
	@Override
	public String generateRandomCharacters(int length) {
	        RandomStringGenerator pwdGenerator = new RandomStringGenerator.Builder().withinRange(48, 57)
	            .build();
	        return pwdGenerator.generate(length);
	    }
	   
	    /* (non-Javadoc)
		 * @see com.project.bozzaecommerce.service.PwdGenService#generateRandomNumbers(int)
		 */
	    @Override
		public String generateRandomNumbers(int length) {
	        RandomStringGenerator pwdGenerator = new RandomStringGenerator.Builder().withinRange(48, 57)
	            .build();
	        return pwdGenerator.generate(length);
	    }
	

}
