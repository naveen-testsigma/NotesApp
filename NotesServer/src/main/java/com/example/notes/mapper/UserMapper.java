package com.example.notes.mapper;

import com.example.notes.dto.LoggedInDto;
import com.example.notes.enitity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    LoggedInDto userToUserDto(User user);
}
