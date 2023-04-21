package com.example.notes.specifications;

import com.example.notes.entity.Notes;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;


@Component
public  class NotesSpecification {

    public static Specification<Notes> hasNoteHeadingLike(String noteHeading) {
        return ((root, query, criteriaBuilder) -> {
            return criteriaBuilder.like(root.get("noteHeading"), "%" + noteHeading + "%");
        });
    }
    public static Specification<Notes> hasId(Long id)
    {
        return ((root, query, criteriaBuilder) -> {
            return  criteriaBuilder.equal(root.get("id"),id);
        });
    }
}
