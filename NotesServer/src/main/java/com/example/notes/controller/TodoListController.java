package com.example.notes.controller;

import com.example.notes.mapper.ListMapper;
import com.example.notes.repository.TodoListRepository;
import com.example.notes.request.ListRequest;
import com.example.notes.request.SearchListRequest;
import com.example.notes.entity.TodoList;
import com.example.notes.service.TodoListService;
import com.example.notes.specifications.NotesSpecification;
import com.example.notes.specifications.TodoListSpecification;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
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
    TodoListService todoListService;
    @Autowired
    ListMapper listMapper;
    @Autowired
    TodoListRepository todoListRepository;
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
    @PutMapping("/update/{id}")
    String updateTodoListById(@PathVariable("id") Long  id, @RequestBody TodoList todoList )
    {
        return todoListService.updateTodoListById(id,todoList);
    }
    @PostMapping("/search")
    List<TodoList> searchList(@RequestBody SearchListRequest searchListRequest)
    {
        System.out.println("Reached here");
        System.out.println(searchListRequest);
        return todoListService.searchList(searchListRequest.getTodoData(),searchListRequest.getUserId());
    }
    @GetMapping("/get")
    List<TodoList> searchListWithSpec(@RequestParam("id") Long id, @RequestParam("search") String search)
    {
        System.out.println(id+" "+search);
        Specification spec=Specification.where(TodoListSpecification.hasTodoDataLike(search)).and(TodoListSpecification.hasId(id));

        return todoListRepository.findAll(spec);
    }

    @DeleteMapping("/delete/{id}")
    String deleteTodoListById(@PathVariable("id") Long id)
    {
        return todoListService.deleteTodoListById(id);
    }

}
