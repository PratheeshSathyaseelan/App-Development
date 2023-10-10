package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Users;
import com.example.demo.service.UserService;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("/auth/user")
public class UserController {

	@Autowired
    private  UserService userService;

    @GetMapping
    public List<Users> getAllUsers() {
        return userService.getAllUser();
    }

    @GetMapping("/{id}")
    public Optional<Users> getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public Users createUser(@RequestBody Users Users) {
        return userService.createUser(Users);
    }

    @PutMapping("/{id}")
    public Users updateUser(@PathVariable int id, @RequestBody Users updatedUser) {
        return userService.updateUser(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }
}
