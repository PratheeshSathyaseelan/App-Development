package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.SignupModel;

import com.example.demo.service.SignupService;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class SignupController {
	
	@Autowired
	public SignupService ss;
	
	@GetMapping("/signdetails")
	public List<SignupModel> getuserdetails(){
		return ss.getuserdetails();
	}
	
	@PostMapping("/signpostdetails")
	public void postDetails(@RequestBody SignupModel sm) {
		ss.postDetails(sm);
	}

}
