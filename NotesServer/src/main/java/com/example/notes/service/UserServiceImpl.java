package com.example.notes.service;

import com.example.notes.entity.User;
import com.example.notes.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public Long getUserIdFromEmailID(String emailId) {
        System.out.println("Reached into userservice");
        System.out.println( userRepository.findByEmailId(emailId));
        System.out.println(userRepository.findAll());
        return userRepository.findByEmailId(emailId).getId();
    }


}
