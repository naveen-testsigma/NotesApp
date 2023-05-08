package com.example.notes.service;

import com.example.notes.builder.TodoListSpecificationBuilder;
import com.example.notes.criteria.Criteria;
import com.example.notes.entity.TodoList;
import com.example.notes.repository.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TodoListService {
    @Autowired
    TodoListRepository todoListRepository;
    @Autowired
    TodoListSpecificationBuilder todoListSpecificationBuilder;

    public TodoList postTodoList(TodoList todoList) {
        return todoListRepository.save(todoList);
    }

    public String updateTodoListById(Long id, TodoList todoList) {
        TodoList temp=todoListRepository.findById(id).get();
        temp.setTodoData(todoList.getTodoData());
        todoListRepository.save(temp);
        return "Updated Successfully";
    }

    public String deleteTodoListById(Long id) {
         todoListRepository.deleteById(id);
         return "Deleted Successfully";
    }

    public List<TodoList> searchList(Long userId,List<String> query) {
       Specification spec= todoListSpecificationBuilder.build(userId,query);
        return todoListRepository.findAll(spec);
    }

    public List<TodoList> index(List<Criteria> criteriaList) {
        Specification spec= todoListSpecificationBuilder.builder(criteriaList);
        return todoListRepository.findAll(spec);
    }
}
