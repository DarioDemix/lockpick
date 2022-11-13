package com.lockpick.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;

@Service("blobService")
public class BlobServiceImpl implements BlobService {

	@Override
	public byte[] getImage() {
		Path path = Paths.get("C:\\Users\\User\\Desktop\\photo_2017-11-08_13-11-39.jpg");
		byte[] data = null;
		try {
			data = Files.readAllBytes(path);
		}catch(Exception e){
			e.printStackTrace();
		}
		return data;
		}
	/*@Override
	public byte[] writeBlob(File file) {
		// TODO Auto-generated method stub
		return null;
	}*/
}
