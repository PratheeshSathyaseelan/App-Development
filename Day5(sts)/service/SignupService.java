package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.SignupModel;

import com.example.demo.repo.SignupRepo;
@Service
public class SignupService {

	@Autowired
	private SignupRepo sign;
	
	public List<SignupModel> getuserdetails(){
		return sign.findAll();
	}
	
	public void postDetails(SignupModel signobj) {
		sign.save(signobj);
	}
}
