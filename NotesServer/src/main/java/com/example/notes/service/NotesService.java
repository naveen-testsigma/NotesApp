package com.example.notes.service;

import com.example.notes.criteria.Criteria;
import com.example.notes.entity.Notes;
import com.example.notes.entity.TodoList;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface NotesService {
    String deleteNotesById(Long id);

    Notes postNotes(Notes notes);

    String updateNotesById(Long id, Notes notes);

    List<Notes> searchNotes(Long id,List<String> query);

    List<Notes> searchNotesTemp(List<Criteria> criteriaList);
}
