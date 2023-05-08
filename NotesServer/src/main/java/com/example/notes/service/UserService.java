package com.example.notes.service;

import com.example.notes.entity.User;
import com.example.notes.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;


    public User addUser(User user) {
        return userRepository.save(user);
    }


    public Long getUserIdFromEmailID(String emailId) {
        System.out.println("Reached into userservice");

          return userRepository.findByEmailId(emailId).getId();
    }


}
