package com.example.notes.service;

import com.example.notes.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {


    User addUser(User user);

    Long getUserIdFromEmailID(String emailId);

}
