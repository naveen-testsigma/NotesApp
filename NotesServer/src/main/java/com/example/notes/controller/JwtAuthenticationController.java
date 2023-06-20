package com.example.notes.controller;


import com.example.notes.dto.JwtResponse;
import com.example.notes.dto.UserDTO;
import com.example.notes.entity.User;
import com.example.notes.jwt.JwtTokenUtil;
import com.example.notes.mapper.JwtMapper;
import com.example.notes.request.JwtRequest;
import com.example.notes.request.LoginRequest;
import com.example.notes.service.JwtUserDetailsService;
import com.example.notes.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@Autowired
	private JwtMapper jwtMapper;
	@Autowired
	private UserService userService;
    @ResponseStatus(HttpStatus.ACCEPTED)
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(HttpServletResponse response, @RequestBody LoginRequest loginRequest) throws Exception {
		JwtRequest authenticationRequest=jwtMapper.loginRequestToJwtRequest(loginRequest);
		userDetailsService.authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());
		final String token = jwtTokenUtil.generateToken(userDetails);
		Cookie cookie=new Cookie("user",token);
		response.addCookie(cookie);
		return ResponseEntity.ok(new JwtResponse(token));
	}
	@ResponseStatus(HttpStatus.CREATED)
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody User user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}


}