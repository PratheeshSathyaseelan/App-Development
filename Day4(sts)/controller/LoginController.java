package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.LoginModel;
import com.example.demo.service.LoginService;

@RestController
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	public LoginService ls;
	
	@GetMapping("/getdetails")
	public List<LoginModel> getuserdetails(){
		return ls.getuserdetails();
	}
	
	@GetMapping("/getdetailsbyid/{id}")
	public Optional<LoginModel> getuserByID(@PathVariable int id){
		return ls.getuserByID(id);
	}
	
	@PostMapping("/postdetails")
	public void postDetails(@RequestBody LoginModel lm) {
		ls.postDetails(lm);
	}
	
	@PutMapping("/putdetails/{id}")
	public void putDetails(@PathVariable int id,@RequestBody LoginModel lm) {
		lm.setId(id);
		ls.putDetails(lm);
	}
	
	@DeleteMapping("/deletesetails/{id}")
	public void deleteByID(@PathVariable int id) {
		ls.deleteByID(id);
	}
	@GetMapping("/welcome")
	public String Hello()
	{
		return "Login Successfull";
	}

}
