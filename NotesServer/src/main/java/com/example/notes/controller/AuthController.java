package com.example.notes.controller;


import com.example.notes.entity.User;
import com.example.notes.jwt.JwtTokenUtil;
import com.example.notes.mapper.JwtMapper;
import com.example.notes.service.JwtUserDetailsService;
import com.example.notes.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@ResponseStatus(HttpStatus.CREATED)
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody User user) throws Exception {
		System.out.println("Came here");
		return ResponseEntity.ok(userDetailsService.save(user));
	}

}