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
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@RestController
@RequestMapping("/todolist")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoListController {
    @Autowired
    CriterialBuilder criterialBuilder;
    @Autowired
    TodoListService todoListService;
    @Autowired
    ListMapper listMapper;
    @Autowired
    TodoListRepository todoListRepository;
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
    @GetMapping("/get")
    List<TodoList> searchList(@RequestParam("id") long id,@RequestParam(required = false, value = "query") List<String> query)
    {
        return todoListService.searchList(id,query);
    }
    @GetMapping("/getsearch")
    List<TodoList> searchListTemp(@RequestParam("query") String data)
    {
        List<Criteria> criteriaList=criterialBuilder.builder(data);
        System.out.println(criteriaList);
        return todoListService.searchListTemp(criteriaList);
    }

    @DeleteMapping("/{id}")
    String deleteTodoListById(@PathVariable("id") Long id)
    {
        return todoListService.deleteTodoListById(id);
    }

}
