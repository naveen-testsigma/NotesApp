package com.example.notes.controller;

import com.example.notes.enitity.TodoList;
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
public class TodoLstController {
    @Autowired
    TodoListService todoListService;
    @PostMapping("/post")
    TodoList postTodoList(@RequestBody TodoList todoList)
    {
        return todoListService.postTodoList(todoList);
    }
    @GetMapping("/userid/{user_id}")
    List<TodoList> getTodoListById(@PathVariable("user_id") Long user_id)
    {
        return todoListService.getTodoListById(user_id);
    }
    @GetMapping("/update/{id}")
    String updateTodoListById(@PathVariable("id") Long  id, @RequestBody TodoList todoList )
    {
        return todoListService.updateTodoListById(id,todoList);
    }

    @DeleteMapping("/delete/{id}")
    String deleteTodoListById(@PathVariable("id") Long id)
    {
        return todoListService.deleteTodoListById(id);
    }

}
