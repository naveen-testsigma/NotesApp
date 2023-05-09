package com.example.notes.mapper;

import com.example.notes.entity.User;
import com.example.notes.request.JwtRequest;
import com.example.notes.dto.UserDTO;
import com.example.notes.request.LoginRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface JwtMapper {
    @Mapping(source = "user.emailId",target="username")
   UserDTO userToUserDTO(User user);
    @Mapping(source = "loginRequest.emailId",target="username")
  JwtRequest loginRequestToJwtRequest(LoginRequest loginRequest);


}
