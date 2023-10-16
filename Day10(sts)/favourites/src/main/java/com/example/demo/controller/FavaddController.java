package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.FavaddModel;
import com.example.demo.Service.FavaddService;

@RestController
@CrossOrigin("*")
@RequestMapping("/details")		
public class FavaddController {
	
	@Autowired
	private FavaddService favser;
	
	@GetMapping("/getfav")
	public List<FavaddModel> getFavs(){		//get
		return favser.getFav();
	}
	
	@PostMapping("/postfav")
	public void postdets(@RequestBody FavaddModel favm)		//post
	{
		favser.postdets(favm);
	}

}
