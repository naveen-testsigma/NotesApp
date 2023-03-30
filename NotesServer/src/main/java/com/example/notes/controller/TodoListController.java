package com.example.notes.controller;

import com.example.notes.mapper.ListMapper;
import com.example.notes.request.ListRequest;
import com.example.notes.request.SearchListRequest;
import com.example.notes.entity.TodoList;
import com.example.notes.service.TodoListService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@RestController
@RequestMapping("/todolist")
public class TodoListController {
    @Autowired
    TodoListService todoListService;
    @Autowired
    ListMapper listMapper;
    @PostMapping("/post")
    TodoList postTodoList(@RequestBody ListRequest listRequest)
    {
        TodoList todoList=listMapper.listRequestToTodoList(listRequest);
        return todoListService.postTodoList(todoList);
    }
    @GetMapping("/userid/{user_id}")
    List<TodoList> getTodoListById(@PathVariable("user_id") Long user_id)
    {
        return todoListService.getTodoListById(user_id);
    }
    @GetMapping("/update/{id}")
    String updateTodoListById(@PathVariable("id") Long  id, @RequestBody ListRequest listRequest )
    {
        TodoList todoList=listMapper.listRequestToTodoList(listRequest);
        return todoListService.updateTodoListById(id,todoList);
    }
    @GetMapping("/search")
    List<TodoList> searchList(@RequestBody SearchListRequest searchListDto)
    {
        return todoListService.searchList(searchListDto.getTodoData(),searchListDto.getUserId());
    }

    @DeleteMapping("/delete/{id}")
    String deleteTodoListById(@PathVariable("id") Long id)
    {
        return todoListService.deleteTodoListById(id);
    }

}
