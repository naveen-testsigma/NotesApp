package com.example.notes.controller;

import com.example.notes.criteria.Criteria;
import com.example.notes.criteria.CriterialBuilder;
import com.example.notes.mapper.ListMapper;
import com.example.notes.repository.TodoListRepository;
import com.example.notes.request.ListRequest;
import com.example.notes.entity.TodoList;
import com.example.notes.service.TodoListService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/todolist")
public class TodoListController {
    @Autowired
    CriterialBuilder criterialBuilder;
    @Autowired
    TodoListService todoListService;
    @Autowired
    ListMapper listMapper;
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/")
    TodoList postTodoList(@RequestBody ListRequest listRequest)
    {
        TodoList todoList=listMapper.listRequestToTodoList(listRequest);
        return todoListService.postTodoList(todoList);
    }
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PutMapping("/{listId}")
    String updateTodoListById(@PathVariable("listId") Long  id, @RequestBody TodoList todoList )
    {
        return todoListService.updateTodoListById(id,todoList);
    }
    @ResponseStatus(HttpStatus.ACCEPTED)
    @GetMapping("/search")
    List<TodoList> index(@RequestParam("query") String data)
    {
        List<Criteria> criteriaList=criterialBuilder.builder(data);
       // System.out.println(criteriaList);
        return todoListService.index(criteriaList);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/{id}")
    String deleteTodoListById(@PathVariable("id") Long id)
    {
        return todoListService.deleteTodoListById(id);
    }

}
