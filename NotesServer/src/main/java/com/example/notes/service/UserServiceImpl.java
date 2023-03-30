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
    public User getUserById(long id) {
        return userRepository.findById(id).get();
    }
    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User findByEmailId(String email) {
        return userRepository.findByEmailId(email);
    }


}
