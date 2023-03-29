package com.example.notes.service;
import com.example.notes.enitity.TodoList;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface TodoListService {
    TodoList postTodoList(TodoList todoList);

    List<TodoList> getTodoListById(Long userId);

    String updateTodoListById(Long id, TodoList todoList);

    String deleteTodoListById(Long id);

    List<TodoList> searchList(String todoData, Long userId);
}
