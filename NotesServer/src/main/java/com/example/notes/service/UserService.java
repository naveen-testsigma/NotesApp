package com.example.notes.service;

import com.example.notes.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    User getUserById(long id);

    User addUser(User user);

    User findByEmailId(String email);

//    User getUserByEmail(String email);
}
