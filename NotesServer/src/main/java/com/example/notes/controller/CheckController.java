package com.example.notes.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CheckController {
    @GetMapping("/")
    String welcome()
    {
        return "<h1>Welcome </h1>";
    }

}
