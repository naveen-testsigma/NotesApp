package com.example.notes.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("http://localhost:4200")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin
public class CheckController {
    @GetMapping("/")
    String welcome()
    {
        return "<h1>Welcome </h1>";
    }

}
