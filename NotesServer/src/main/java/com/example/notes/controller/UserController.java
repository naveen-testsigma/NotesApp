package com.example.notes.controller;

import com.example.notes.service.UserService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        return userService.getUserIdFromEmailID(emailId);
    }

}
