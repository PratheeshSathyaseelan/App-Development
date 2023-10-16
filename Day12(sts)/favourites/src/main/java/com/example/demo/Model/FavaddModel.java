package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="Favadd")
public class FavaddModel {
	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int Id;
	private String storyimgurl;
	private String storyaudurl;
	private String description;
	
	

}
