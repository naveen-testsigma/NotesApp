package com.example.notes.mapper;

import com.example.notes.entity.User;
import com.example.notes.model.JwtRequest;
import com.example.notes.model.UserDTO;
import com.example.notes.request.LoginRequest;

public class JwtMapper {
    public UserDTO userToUserDTO(User user)
    {
        UserDTO userDTO=new UserDTO();
        userDTO.setPassword(user.getPassword());
        userDTO.setUsername(user.getEmailId());
        return userDTO;
    }
    public JwtRequest loginRequestToJwtRequest(LoginRequest loginRequest)
    {
       return new JwtRequest(loginRequest.getEmailId(),loginRequest.getPassword());
    }


}
