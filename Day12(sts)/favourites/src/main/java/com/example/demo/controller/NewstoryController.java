package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.NewstoryModel;
import com.example.demo.Service.NewstoryService;

@RestController
@CrossOrigin("*")
@RequestMapping("/newstory")

public class NewstoryController {
	
	@Autowired
	private NewstoryService nss;
	
	@GetMapping("/getstory")
	public List<NewstoryModel> getstory(){
		return nss.getstory();
	}
	
	@PostMapping("/poststory")
	public void poststory(@RequestBody NewstoryModel nm) {
		nss.poststory(nm);
	}
	
	@PutMapping("/putstory")
	public NewstoryModel putstory (NewstoryModel nm) {
		return nss.putstory(nm);
	}
	
	@DeleteMapping("/deletestory/{id}")
	public void deletestory(@PathVariable int id) {
		nss.deletestory(id);
	}

}
