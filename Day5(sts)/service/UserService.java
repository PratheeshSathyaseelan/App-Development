package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Users;
import com.example.demo.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

	@Autowired
    private  UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<Users> getAllUser() {
        return userRepository.findAll();
    }

    public Optional<Users> getUserById(int id) {
        return userRepository.findById(id);
    }

    public Users createUser(Users Users) {
        return userRepository.save(Users);
    }

    public Users updateUser(int id, Users updatedUser) {
        Optional<Users> existingUserOptional = userRepository.findById(id);

        if (existingUserOptional.isPresent()) {
            Users existingUser = existingUserOptional.get();
            existingUser.setUserName(updatedUser.getUserName());
            existingUser.setGender(updatedUser.getGender());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setContactnum(updatedUser.getContactnum());
           
            existingUser.setDob(updatedUser.getDob());

            return userRepository.save(existingUser);
        } else {
            throw new RuntimeException("User not found with ID: " + id);
        }
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
}
