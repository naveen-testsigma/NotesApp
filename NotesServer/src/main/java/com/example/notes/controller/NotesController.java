package com.example.notes.controller;

import com.example.notes.builder.NotesSpecificationBuilder;
import com.example.notes.mapper.NotesMapper;
import com.example.notes.repository.NotesRepository;
import com.example.notes.request.NotesRequest;
import com.example.notes.entity.Notes;
import com.example.notes.service.NotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notes")
public class NotesController {
    @Autowired
    NotesService notesService;
    @Autowired
    NotesRepository notesRepository;
    @Autowired
    NotesSpecificationBuilder notesSpecificationBuilder;
    @Autowired
    NotesMapper notesMapper;
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PostMapping()
    Notes postNotes(@RequestBody NotesRequest notesRequest)
    {
        Notes notes=notesMapper.notesRequestToNotes(notesRequest);
        return notesService.postNotes(notes);
    }
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PostMapping("/{id}")
    String updateNotesById(@PathVariable("id") Long  id, @RequestBody NotesRequest notesRequest )
    {
        Notes notes=notesMapper.notesRequestToNotes(notesRequest);
        return notesService.updateNotesById(id,notes);
    }
    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/{notesId}")
    String deleteNotesById(@PathVariable("notesId") Long id)
    {
        return notesService.deleteNotesById(id);
    }
    @ResponseStatus(HttpStatus.OK)
    @GetMapping()
    List<Notes> index(@RequestParam("query") String data)
    {
        return notesSpecificationBuilder.build(data);
    }
}
