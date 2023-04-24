package com.example.notes.builder;

import com.example.notes.entity.Notes;
import com.example.notes.entity.TodoList;
import com.example.notes.specifications.TodoListSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TodoListSpecificationBuilder {
    @Autowired
    TodoListSpecification todoListSpecification;
    public Specification build(Long userId, List<String> query) {
        Specification<TodoList> specForId=todoListSpecification.hasId(userId);
        if(query!=null)
        {
            Specification<TodoList> specForQuery = todoListSpecification.hasTodoDataLike(query.get(0));
            for(String x:query)
            {
                specForQuery=specForQuery.or(todoListSpecification.hasTodoDataLike(x));
            }
            specForId=specForId.and(specForQuery);
        }

        Specification spec=Specification.where(specForId);
        return spec;
    }
}
