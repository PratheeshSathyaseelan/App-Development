package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.FavaddModel;
import com.example.demo.Repository.FavaddRepo;

@Service
public class FavaddService {
	
	@Autowired
	private FavaddRepo favadd;
	
	public List<FavaddModel> getFav(){   //Get
		return favadd.findAll();
	}
	
	public void postdets (FavaddModel fv) {    //Post
		favadd.save(fv);
	}
	

}
