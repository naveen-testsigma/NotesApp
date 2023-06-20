package com.example.notes.builder;

import com.example.notes.criteria.BaseSpecificationBuilder;
import com.example.notes.criteria.Criteria;
import com.example.notes.entity.Notes;
import com.example.notes.repository.NotesRepository;
import com.example.notes.service.NotesService;
import com.example.notes.specifications.NotesSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public class NotesSpecificationBuilder extends BaseSpecificationBuilder {
    @Autowired
    NotesSpecification notesSpecification;
    @Autowired
    NotesService notesService;
    @Autowired
    NotesRepository notesRepository;
    public Specification builder(List<Criteria> criteriaList) {
        Specification<Notes> specForId = null;
        Specification<Notes> specForQuery = null;
        Boolean first = true;
        for (Criteria x : criteriaList) {
            if (x.getKey().equalsIgnoreCase("id")) {
                specForId = notesSpecification.builder("hasId",(Long.parseLong(x.getValue())));
            } else if(x.getKey().equalsIgnoreCase("title")) {
                if (first) {
                    first = false;
                    specForQuery = notesSpecification.builder("hasNoteHeadingLike",(x.getValue()));
                } else {
                    specForQuery = specForQuery.or(notesSpecification.builder("hasNoteHeadingLike",(x.getValue())));
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

    public List<Notes> build(String data) {
        super.builder(data);
        Specification spec= builder(criteriaList);
        return notesRepository.findAll(spec);
    }
}
