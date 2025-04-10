package com.example.notes.jwt;

import com.example.notes.dto.JwtResponse;
import com.example.notes.mapper.JwtMapper;
import com.example.notes.request.JwtRequest;
import com.example.notes.request.LoginRequest;
import com.example.notes.service.JwtUserDetailsService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthendicateFilter extends AbstractAuthenticationProcessingFilter {

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    private JwtMapper jwtMapper;


    private final RequestMatcher usersAuthRequestMatcher = new AntPathRequestMatcher("/authenticate");

    public JwtAuthendicateFilter(String string) {
        super(string);
    }

@Override
public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws IOException {
    if (usersAuthRequestMatcher.matches(request)) {
        JwtRequest authenticationRequest = new ObjectMapper().readValue(request.getInputStream(), JwtRequest.class);
        //System.out.println(authenticationRequest + " request");

        try {
            // Authenticate the user
            Authentication authentication = userDetailsService.authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
            SecurityContextHolder.getContext().setAuthentication(authentication);
            final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
            final String token = jwtTokenUtil.generateToken(userDetails);
          //  System.out.println(token);
            // Set the token as a cookie and return it
            Cookie cookie = new Cookie("user", token);
            response.addCookie(cookie);
           // System.out.println("Authentication "+authentication);
            return authentication;
        } catch (AuthenticationException e) {

           // System.out.println("Authentication failed: " + e.getMessage());
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return null;
        } catch (Exception e) {

            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            return null;
        }
    }

    return null;
}
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        String token = jwtTokenUtil.generateToken((UserDetails) authResult.getPrincipal());
        response.addHeader("Authorization", "Bearer " + token);
    }

}
