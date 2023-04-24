package com.example.notes.service;
import com.example.notes.criteria.Criteria;
import com.example.notes.entity.TodoList;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface TodoListService {
    TodoList postTodoList(TodoList todoList);
    String updateTodoListById(Long id, TodoList todoList);

    String deleteTodoListById(Long id);

    List<TodoList> searchList( Long userId,List<String> query);

    List<TodoList> searchListTemp(List<Criteria> criteriaList);
}
