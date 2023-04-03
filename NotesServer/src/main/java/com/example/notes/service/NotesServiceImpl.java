package com.example.notes.service;

import com.example.notes.entity.Notes;
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

    @Override
    public Notes postNotes(Notes notes) {
        return notesRepository.save(notes);
    }
    @Override
    public String updateNotesById(Long id, Notes notes) {
        Notes temp=notesRepository.findById(id).get();
        temp.setNoteHeading(notes.getNoteHeading());
        temp.setNoteBody(notes.getNoteBody());
        notesRepository.save(temp);
       return  "Updated Successfully";
    }

    @Override
    public List<Notes> searchNotes(String word,Long id) {
        return notesRepository.findByUserIdAndNoteHeadingLike(id,"%"+word+"%");
    }

}
