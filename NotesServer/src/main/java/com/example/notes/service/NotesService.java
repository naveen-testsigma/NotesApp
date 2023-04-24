package com.example.notes.service;

import com.example.notes.entity.Notes;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface NotesService {
    String deleteNotesById(Long id);

    //String updateNotesById(Long id);

    Notes postNotes(Notes notes);

    String updateNotesById(Long id, Notes notes);

    List<Notes> searchNotes(Long id,List<String> query);
}
