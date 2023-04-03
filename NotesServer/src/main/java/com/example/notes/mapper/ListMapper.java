package com.example.notes.mapper;

import com.example.notes.entity.TodoList;
import com.example.notes.request.ListRequest;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ListMapper {

    TodoList listRequestToTodoList(ListRequest listRequest);
}
