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
public class TodoListServiceImpl implements TodoListService{
    @Autowired
    TodoListRepository todoListRepository;
    @Autowired
    TodoListSpecificationBuilder todoListSpecificationBuilder;
    @Override
    public TodoList postTodoList(TodoList todoList) {
        return todoListRepository.save(todoList);
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
    public List<TodoList> searchList(Long userId,List<String> query) {
       Specification spec= todoListSpecificationBuilder.build(userId,query);
        return todoListRepository.findAll(spec);
    }

    @Override
    public List<TodoList> searchListTemp(List<Criteria> criteriaList) {
        Specification spec= todoListSpecificationBuilder.builder(criteriaList);
        return todoListRepository.findAll(spec);
    }
}
