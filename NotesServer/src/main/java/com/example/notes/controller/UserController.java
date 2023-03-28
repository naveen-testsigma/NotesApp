package com.example.notes.controller;

import com.example.notes.enitity.User;
import com.example.notes.service.UserService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@AllArgsConstructor
@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    UserService userService;
    @GetMapping("/id/{id}")
    User getUserById(@PathVariable("id") long id)
    {
        return userService.getUserById(id);
    }
    @GetMapping("/email/{email}")
    User getUserByEmail(@PathVariable("email") String email)
    {
        return userService.findByEmailId(email);
    }
    @PostMapping("/add")
    User addUser(@RequestBody User user)
    {
        System.out.println("Reached here");
        return userService.addUser(user);
    }

}
