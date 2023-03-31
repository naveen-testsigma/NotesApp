//package com.example.notes.controller;
//
//import com.example.notes.dto.LoggedInDto;
//import com.example.notes.request.LoginRequest;
//import com.example.notes.entity.User;
//import com.example.notes.mapper.UserMapper;
//import com.example.notes.request.SignupRequest;
//import com.example.notes.service.UserService;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Objects;
//
//@Data
//@AllArgsConstructor
//@RestController
//@RequestMapping("/user")
//@CrossOrigin(origins = "http://localhost:4200")
//public class UserController {
//    @Autowired
//    UserService userService;
//    @Autowired
//    UserMapper userMapper;
//    @GetMapping("/id/{id}")
//    User getUserById(@PathVariable("id") long id)
//    {
//        return userService.getUserById(id);
//    }
//    @GetMapping("/email/{email}")
//    User getUserByEmail(@PathVariable("email") String email)
//    {
//        return userService.findByEmailId(email);
//    }
//    @PostMapping ("/check")
//    LoggedInDto checking(@RequestBody LoginRequest loginRequest)
//    {
//        User currentUser=userService.findByEmailId(loginRequest.getEmailId());
//        if(currentUser==null)
//            return null;
//        if(Objects.equals(currentUser.getPassword(), loginRequest.getPassword()))
//        {
//            return userMapper.userToLoggedInDto(currentUser);
//        }
//        else {
//            return null;
//        }
//    }
//
//
//    @PostMapping("/add")
//    User addUser(@RequestBody SignupRequest signupRequest)
//    {
//        User user=userMapper.SignupRequestToUser(signupRequest);
//        return userService.addUser(user);
//    }
//
//}
