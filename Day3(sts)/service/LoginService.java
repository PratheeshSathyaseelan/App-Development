package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.LoginModel;
import com.example.demo.repo.LoginRepo;

@Service
public class LoginService {
	
	@Autowired
	private LoginRepo log;
	
	public List<LoginModel> getuserdetails(){
		return log.findAll();
	}
	
	public Optional<LoginModel> getuserByID(int id){
		return log.findById(id);
	}
	
	public void postDetails(LoginModel logobj) {
		log.save(logobj);
	}
	
	public LoginModel putDetails(LoginModel logobj) {
		return log.save(logobj);
	}
	
	public void deleteByID(int id) {
		log.deleteById(id);
	}

}
