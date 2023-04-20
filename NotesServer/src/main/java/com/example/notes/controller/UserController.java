package com.example.notes.controller;

import com.example.notes.dto.LoggedInDto;
import com.example.notes.request.LoginRequest;
import com.example.notes.entity.User;
import com.example.notes.mapper.UserMapper;
import com.example.notes.request.SignupRequest;
import com.example.notes.service.UserService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@Data
@AllArgsConstructor
@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    UserService userService;
    @GetMapping("/{emailId}")
    Long getUserId(@PathVariable("emailId") String emailId)
    {
        System.out.println("Reached here");
        return userService.getUserIdFromEmailID(emailId);
    }

}
