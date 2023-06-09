package com.example.notes.controller;


import com.example.notes.entity.User;
import com.example.notes.jwt.JwtTokenUtil;
import com.example.notes.mapper.JwtMapper;
import com.example.notes.request.JwtRequest;
import com.example.notes.dto.JwtResponse;
import com.example.notes.dto.UserDTO;
import com.example.notes.request.LoginRequest;
import com.example.notes.service.JwtUserDetailsService;
import com.example.notes.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	private JwtMapper jwtMapper=new JwtMapper();
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(HttpServletResponse response, @RequestBody LoginRequest loginRequest) throws Exception {
		JwtRequest authenticationRequest=jwtMapper.loginRequestToJwtRequest(loginRequest);
		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());
		final String token = jwtTokenUtil.generateToken(userDetails);
		Cookie cookie=new Cookie("user",token);
		response.addCookie(cookie);
		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody User user) throws Exception {
		userService.addUser(user);
		UserDTO userDto=jwtMapper.userToUserDTO(user);
		return ResponseEntity.ok(userDetailsService.save(userDto));
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}