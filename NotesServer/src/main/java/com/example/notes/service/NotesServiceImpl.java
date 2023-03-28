package com.example.notes.service;

import com.example.notes.enitity.Notes;
import com.example.notes.repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class NotesServiceImpl implements NotesService {
    @Autowired
    NotesRepository notesRepository;
    @Override
    public List<Notes> getNotesById(Long userId) {
        return notesRepository.findByUserId(userId);
    }

    @Override
    public String deleteNotesById(Long id) {
        notesRepository.deleteById(id);
        return "Deleted "+id;
    }
//    @Override
//    public String updateNotesById() {
//        return notesRepository.saveOrUpdate();
//    }

    @Override
    public Notes postNotes(Notes notes) {
        return notesRepository.save(notes);
    }
    //TODO
    @Override
    public String updateNotesById(Long id, Notes notes) {
        return "";
    }
}
