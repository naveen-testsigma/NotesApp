package com.example.notes.builder;

import com.example.notes.criteria.Criteria;
import com.example.notes.entity.Notes;
import com.example.notes.entity.TodoList;
import com.example.notes.specifications.NotesSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public class NotesSpecificationBuilder {
    @Autowired
    NotesSpecification notesSpecification;
    public Specification build(Long id, List<String> query) {
        Specification<Notes> specForId=notesSpecification.hasId(id);
        if(query!=null)
        {
            Specification<Notes> specForQuery = notesSpecification.hasNoteHeadingLike(query.get(0));
            for(String x:query)
            {
                specForQuery=specForQuery.or(notesSpecification.hasNoteHeadingLike(x));
            }
            specForId=specForId.and(specForQuery);
        }

        Specification spec=Specification.where(specForId);
        return spec;

    }

    public Specification builder(List<Criteria> criteriaList) {
        Specification<Notes> specForId = null;
        Specification<Notes> specForQuery = null;
        Boolean first = true;
        for (Criteria x : criteriaList) {
            if (x.getKey().equalsIgnoreCase("id")) {
                specForId = notesSpecification.hasId(Long.parseLong(x.getValue()));
            } else if(x.getKey().equalsIgnoreCase("title")) {
                if (first) {
                    first = false;
                    specForQuery = notesSpecification.hasNoteHeadingLike(x.getValue());
                } else {
                    specForQuery = specForQuery.or(notesSpecification.hasNoteHeadingLike(x.getValue()));
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
