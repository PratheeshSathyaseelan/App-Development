package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.NewstoryModel;
import com.example.demo.Repository.NewstoryRepo;

@Service
public class NewstoryService {
	
	@Autowired
	private NewstoryRepo nsr;
	
	public List<NewstoryModel> getstory(){
		return nsr.findAll();
	}
	
	public void poststory (NewstoryModel sm) {
		nsr.save(sm);
	}
	
	public NewstoryModel putstory (NewstoryModel sm) {
		return nsr.save(sm);
	}
	
	public void deletestory (int id) {
		nsr.deleteById(id);
	}

}
