package com.example.notes.builder;

import com.example.notes.criteria.Criteria;
import com.example.notes.entity.Notes;
import com.example.notes.entity.TodoList;
import com.example.notes.specifications.TodoListSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import java.util.List;

import static ch.qos.logback.classic.Level.valueOf;

@Component
public class TodoListSpecificationBuilder {
    @Autowired
    TodoListSpecification todoListSpecification;

    public Specification build(Long userId, List<String> query) {
        Specification<TodoList> specForId = todoListSpecification.hasId(userId);
        if (query != null) {
            Specification<TodoList> specForQuery = todoListSpecification.hasTodoDataLike(query.get(0));
            for (String x : query) {
                specForQuery = specForQuery.or(todoListSpecification.hasTodoDataLike(x));
            }
            specForId = specForId.and(specForQuery);
        }

        Specification spec = Specification.where(specForId);
        return spec;
    }

    public Specification builder(List<Criteria> criteriaList) {
        Specification<TodoList> specForId = null;
        Specification<TodoList> specForQuery = null;
        Boolean first = true;
        for (Criteria x : criteriaList) {
            if (x.getKey().equalsIgnoreCase("id")) {
                specForId = todoListSpecification.hasId(Long.parseLong(x.getValue()));
            } else if(x.getKey().equalsIgnoreCase("title")) {
                if (first) {
                    first = false;
                    specForQuery = todoListSpecification.hasTodoDataLike(x.getValue());
                } else {
                    specForQuery = specForQuery.or(todoListSpecification.hasTodoDataLike(x.getValue()));
                }
            }
        }
        if(!first)
        {
            specForId = specForId.and(specForQuery);
        }
        Specification spec = Specification.where(specForId);
        return spec;
    }
}

//        if(query!=null)
//        {
//            Specification<TodoList> specForQuery = todoListSpecification.hasTodoDataLike(query.get(0));
//            for(String x:query)
//            {
//                specForQuery=specForQuery.or(todoListSpecification.hasTodoDataLike(x));
//            }
//            specForId=specForId.and(specForQuery);
//        }
//
//        Specification spec=Specification.where(specForId);
//        return spec;
//    }
//}
