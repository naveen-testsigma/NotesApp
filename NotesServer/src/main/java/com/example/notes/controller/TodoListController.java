package com.example.notes.controller;

import com.example.notes.dto.SearchListDto;
import com.example.notes.dto.SearchNotesDto;
import com.example.notes.enitity.Notes;
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
@CrossOrigin("http://localhost:4200")
public class TodoListController {
    @Autowired
    TodoListService todoListService;
    @PostMapping
    TodoList postTodoList(@RequestBody TodoList todoList)
    {
        return todoListService.postTodoList(todoList);
    }
    @GetMapping("/userid/{user_id}")
    List<TodoList> getTodoListById(@PathVariable("user_id") Long user_id)
    {
        return todoListService.getTodoListById(user_id);
    }
    @PutMapping("/update/{id}")
    String updateTodoListById(@PathVariable("id") Long  id, @RequestBody TodoList todoList )
    {
        return todoListService.updateTodoListById(id,todoList);
    }
    @PostMapping("/search")
    List<TodoList> searchList(@RequestBody SearchListDto searchListDto)
    {
        return todoListService.searchList(searchListDto.getTodoData(),searchListDto.getUserId());
    }

    @DeleteMapping("/delete/{id}")
    String deleteTodoListById(@PathVariable("id") Long id)
    {
        return todoListService.deleteTodoListById(id);
    }

}
