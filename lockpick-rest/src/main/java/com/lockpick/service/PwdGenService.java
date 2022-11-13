package com.lockpick.service;

public interface PwdGenService {

	String generateRandomSpecialCharacters(int length);

	String generateCommonTextPassword();

	String generateRandomAlphabet(int length, boolean lowerCase);

	String generateRandomCharacters(int length);

	String generateRandomNumbers(int length);

}