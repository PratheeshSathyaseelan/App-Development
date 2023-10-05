package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.SignupModel;

public interface SignupRepo extends JpaRepository<SignupModel, Integer>{

}
