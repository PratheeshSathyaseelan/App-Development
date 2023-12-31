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

import com.example.demo.Model.FavModel;
import com.example.demo.Service.FavService;

@RestController
@RequestMapping("/favourites")
public class FavController {

	@Autowired
	public FavService fs;
	
	@GetMapping("/getfavdetails")
	public List<FavModel> getuserdetails(){
		return fs.getuserdetails();
	}
	
	@GetMapping("/getfavdetailsbyid/{id}")
	public Optional<FavModel> getuserByID(@PathVariable int id){
		return fs.getuserByID(id);
	}
	
	@PostMapping("/postfavdetails")
	public void postDetails(@RequestBody FavModel lm) {
		fs.postDetails(lm);
	}
	
	@PutMapping("/putfavdetails/{id}")
	public void putDetails(@PathVariable int id,@RequestBody FavModel fm) {
		fm.setId(id);
		fs.putDetails(fm);
	}
	
	@DeleteMapping("/deletfavdetails/{id}")
	public void deleteByID(@PathVariable int id) {
		fs.deleteByID(id);
	}
	
	@GetMapping("/get")
	public String getvalue() {
		return "Samyuktha";
	}
}
