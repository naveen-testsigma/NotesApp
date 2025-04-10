package com.example.notes.service;

import com.example.notes.builder.NotesSpecificationBuilder;
import com.example.notes.criteria.Criteria;
import com.example.notes.entity.Notes;
import com.example.notes.repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class NotesService {
    @Autowired
    NotesSpecificationBuilder notesSpecificationBuilder;
    @Autowired
    NotesRepository notesRepository;
    public String deleteNotesById(Long id) {
        notesRepository.deleteById(id);
        return "Deleted "+id;
    }
    public Notes postNotes(Notes notes) {
        return notesRepository.save(notes);
    }
    public String updateNotesById(Long id, Notes notes) {
        Notes temp=notesRepository.findById(id).get();
        temp.setNoteHeading(notes.getNoteHeading());
        temp.setNoteBody(notes.getNoteBody());
        notesRepository.save(temp);
       return  "Updated Successfully";
    }


}
