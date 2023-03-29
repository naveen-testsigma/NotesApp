package com.example.notes.controller;

import com.example.notes.dto.SearchNotesDto;
import com.example.notes.enitity.Notes;
import com.example.notes.service.NotesService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@RestController
@RequestMapping("/notes")
@CrossOrigin("http://localhost:4200")
public class NotesController {
    @Autowired
    NotesService notesService;
    @PostMapping("/post")
    Notes postNotes(@RequestBody Notes notes)
    {
        return notesService.postNotes(notes);
    }
    @GetMapping("/search")
    List<Notes> searchNotes(@RequestBody SearchNotesDto searchDto)
    {
        return notesService.searchNotes(searchDto.getNoteHeading(),searchDto.getUserId());
    }
    @GetMapping("/userid/{user_id}")
    List<Notes> getNotesById(@PathVariable("user_id") Long user_id)
    {
        return notesService.getNotesById(user_id);
    }
    @GetMapping("/update/{id}")
    String updateNotesById(@PathVariable("id") Long  id, @RequestBody Notes notes )
    {
        return notesService.updateNotesById(id,notes);
    }

    @DeleteMapping("/delete/{id}")
    String deleteNotesById(@PathVariable("id") Long id)
    {
        return notesService.deleteNotesById(id);
    }


}
