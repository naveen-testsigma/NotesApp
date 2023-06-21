package com.example.notes.specifications;

import com.example.notes.entity.Notes;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;


@Component
public  class NotesSpecification {
    public static<E> Specification<Notes> builder(String type,E data)
    {
        if(type=="hasNoteHeadingLike")
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


}
