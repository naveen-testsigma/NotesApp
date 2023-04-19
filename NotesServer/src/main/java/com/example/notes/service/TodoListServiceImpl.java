package com.example.notes.service;

import com.example.notes.entity.TodoList;
import com.example.notes.repository.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TodoListServiceImpl implements TodoListService{
    @Autowired
    TodoListRepository todoListRepository;
    @Override
    public TodoList postTodoList(TodoList todoList) {
        return todoListRepository.save(todoList);
    }

    @Override
    public List<TodoList> getTodoListById(Long userId) {
        return todoListRepository.findAllByUserId(userId);
    }

    @Override
    public String updateTodoListById(Long id, TodoList todoList) {
        TodoList temp=todoListRepository.findById(id).get();
        temp.setTodoData(todoList.getTodoData());
        todoListRepository.save(temp);
        return "Updated Successfully";
    }

    @Override
    public String deleteTodoListById(Long id) {
         todoListRepository.deleteById(id);
         return "Deleted Successfully";
    }

    @Override
    public List<TodoList> searchList(String todoData, Long userId) {
        System.out.println(todoListRepository.findAll());
        return todoListRepository.findByUserIdAndTodoDataLike(userId,"%"+todoData+"%");
    }
}
