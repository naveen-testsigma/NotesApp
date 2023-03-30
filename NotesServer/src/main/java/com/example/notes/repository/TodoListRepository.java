package com.example.notes.repository;

import com.example.notes.entity.TodoList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoListRepository extends JpaRepository<TodoList,Long>
{
    List<TodoList> findAllByUserId(Long userId);

    List<TodoList> findByTodoDataAndUserId(String todoData, Long userId);
}
