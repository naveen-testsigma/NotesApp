package com.example.notes.controller;

import com.example.notes.mapper.NotesMapper;
import com.example.notes.request.NotesRequest;
import com.example.notes.request.SearchNotesRequest;
import com.example.notes.entity.Notes;
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
@CrossOrigin
public class NotesController {
    @Autowired
    NotesService notesService;
    @Autowired
    NotesMapper notesMapper;
    @PostMapping("/post")
    Notes postNotes(@RequestBody NotesRequest notesRequest)
    {
        Notes notes=notesMapper.notesRequestToNotes(notesRequest);
        return notesService.postNotes(notes);
    }
    @PostMapping("/search")
    List<Notes> searchNotes(@RequestBody SearchNotesRequest searchDto)
    {
        System.out.println("Here at search");
        return notesService.searchNotes(searchDto.getNoteHeading(),searchDto.getUserId());
    }
    @GetMapping("/userid/{user_id}")
    List<Notes> getNotesById(@PathVariable("user_id") Long user_id)
    {

        return notesService.getNotesById(user_id);
    }
    @PostMapping("/update/{id}")
    String updateNotesById(@PathVariable("id") Long  id, @RequestBody NotesRequest notesRequest )
    {
        Notes notes=notesMapper.notesRequestToNotes(notesRequest);
        return notesService.updateNotesById(id,notes);
    }

    @DeleteMapping("/delete/{id}")
    String deleteNotesById(@PathVariable("id") Long id)
    {
        return notesService.deleteNotesById(id);
    }


}
