package com.example.notes.specifications;


import com.example.notes.entity.TodoList;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

@Component
public  class TodoListSpecification  {
    public static<E> Specification<TodoList> builder(String type,E data)
    {
        if(type=="hasTodoDataLike")
        {
            return ((root, query, criteriaBuilder) -> {
                return criteriaBuilder.like(root.get("noteHeading"), "%" + data + "%");
            });
        }
        else if(type=="hasId")
        {
            return ((root, query, criteriaBuilder) -> {
                return  criteriaBuilder.equal(root.get("userId"),data);
            });
        }
        return null;
    }
//    public static Specification<TodoList> hasTodoDataLike(String todoData) {
//        return ((root, query, criteriaBuilder) -> {
//            return criteriaBuilder.like(root.get("todoData"), "%" + todoData + "%");
//        });
//    }
//    public static Specification<TodoList> hasId(Long id)
//    {
//        return ((root, query, criteriaBuilder) -> {
//            return  criteriaBuilder.equal(root.get("userId"),id);
//        });
//    }
}
