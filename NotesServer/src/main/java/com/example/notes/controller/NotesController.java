package com.example.notes.controller;

import com.example.notes.criteria.Criteria;
import com.example.notes.criteria.CriterialBuilder;
import com.example.notes.mapper.NotesMapper;
import com.example.notes.repository.NotesRepository;
import com.example.notes.request.NotesRequest;
import com.example.notes.entity.Notes;
import com.example.notes.service.NotesService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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
    CriterialBuilder criterialBuilder;
    @Autowired
    NotesMapper notesMapper;
    @PostMapping()
    Notes postNotes(@RequestBody NotesRequest notesRequest)
    {
        Notes notes=notesMapper.notesRequestToNotes(notesRequest);
        return notesService.postNotes(notes);
    }
    @PostMapping("/{id}")
    String updateNotesById(@PathVariable("id") Long  id, @RequestBody NotesRequest notesRequest )
    {
        Notes notes=notesMapper.notesRequestToNotes(notesRequest);
        return notesService.updateNotesById(id,notes);
    }

    @DeleteMapping("/{notesId}")
    String deleteNotesById(@PathVariable("notesId") Long id)
    {
        return notesService.deleteNotesById(id);
    }
    @GetMapping("/search")
    List<Notes> index(@RequestParam("query") String data)
    {
        List<Criteria> criteriaList=criterialBuilder.builder(data);
        return notesService.index(criteriaList);
    }
}
