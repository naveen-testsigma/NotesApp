package com.example.notes.specifications;

import com.example.notes.entity.Notes;
import com.example.notes.entity.TodoList;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

@Component
public abstract class TodoListSpecification implements Specification<TodoList> {
    public static Specification<TodoList> hasTodoDataLike(String todoData) {
        return ((root, query, criteriaBuilder) -> {
            return criteriaBuilder.like(root.get("todoData"), "%" + todoData + "%");
        });
    }
    public static Specification<TodoList> hasId(Long id)
    {
        return ((root, query, criteriaBuilder) -> {
            return  criteriaBuilder.equal(root.get("id"),id);
        });
    }
}
