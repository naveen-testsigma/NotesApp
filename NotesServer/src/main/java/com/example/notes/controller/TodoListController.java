package com.example.notes.controller;

import com.example.notes.builder.TodoListSpecificationBuilder;
import com.example.notes.criteria.Criteria;
import com.example.notes.criteria.BaseSpecificationBuilder;
import com.example.notes.mapper.ListMapper;
import com.example.notes.request.ListRequest;
import com.example.notes.entity.TodoList;
import com.example.notes.service.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/todolist")
public class TodoListController {
    @Autowired
    TodoListSpecificationBuilder criterialBuilder;
    @Autowired
    TodoListService todoListService;
    @Autowired
    ListMapper listMapper;
    @PostMapping("/")
    TodoList postTodoList(@RequestBody ListRequest listRequest)
    {
        TodoList todoList=listMapper.listRequestToTodoList(listRequest);
        return todoListService.postTodoList(todoList);
    }

    @PutMapping("/{listId}")
    String updateTodoListById(@PathVariable("listId") Long  id, @RequestBody TodoList todoList )
    {
        return todoListService.updateTodoListById(id,todoList);
    }
    @GetMapping()
    List<TodoList> index(@RequestParam("query") String data)
    {
        List<Criteria> criteriaList=criterialBuilder.builder(data);
       // System.out.println(criteriaList);
        return todoListService.index(criteriaList);
    }

    @DeleteMapping("/{id}")
    String deleteTodoListById(@PathVariable("id") Long id)
    {
        return todoListService.deleteTodoListById(id);
    }

}
