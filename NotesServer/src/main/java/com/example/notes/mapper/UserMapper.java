package com.example.notes.mapper;

import com.example.notes.dto.LoggedInDto;
import com.example.notes.entity.User;
import com.example.notes.request.SignupRequest;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    LoggedInDto userToLoggedInDto(User user);
    User SignupRequestToUser(SignupRequest signupRequest);
}
