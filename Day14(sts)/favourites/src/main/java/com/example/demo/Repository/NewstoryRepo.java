package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.NewstoryModel;

@Repository
public interface NewstoryRepo extends JpaRepository<NewstoryModel, Integer>{

}
