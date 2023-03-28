package com.example.notes.service;

import com.example.notes.enitity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    User getUserById(long id);

    User addUser(User user);

    User findByEmailId(String email);

//    User getUserByEmail(String email);
}
