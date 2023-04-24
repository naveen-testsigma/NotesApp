package com.example.notes.controller;

import com.example.notes.mapper.NotesMapper;
import com.example.notes.repository.NotesRepository;
import com.example.notes.request.NotesRequest;
import com.example.notes.request.SearchNotesRequest;
import com.example.notes.entity.Notes;
import com.example.notes.service.NotesService;
import com.example.notes.specifications.NotesSpecification;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@RestController
@RequestMapping("/notes")
@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin
public class NotesController {
    @Autowired
    NotesService notesService;
    @Autowired
    NotesRepository notesRepository;
    @Autowired
    NotesMapper notesMapper;
    @PostMapping("/")
    Notes postNotes(@RequestBody NotesRequest notesRequest)
    {
        Notes notes=notesMapper.notesRequestToNotes(notesRequest);
        return notesService.postNotes(notes);
    }
//    @PostMapping("/search")
//    List<Notes> searchNotes(@RequestBody SearchNotesRequest searchDto)
//    {
//        return notesService.searchNotes(searchDto.getNoteHeading(),searchDto.getUserId());
//    }
//    @GetMapping("/userid/{user_id}")
//    List<Notes> getNotesById(@PathVariable("user_id") Long user_id)
//    {
//
//        return notesService.getNotesById(user_id);
//    }
    @PostMapping("/{id}")
    String updateNotesById(@PathVariable("id") Long  id, @RequestBody NotesRequest notesRequest )
    {
        Notes notes=notesMapper.notesRequestToNotes(notesRequest);
        return notesService.updateNotesById(id,notes);
    }

    @DeleteMapping("/{id}")
    String deleteNotesById(@PathVariable("id") Long id)
    {
        return notesService.deleteNotesById(id);
    }

    @GetMapping("/get")
    public List<Notes> fun(@RequestParam("id") long id, @RequestParam("title") String search)
    {
        System.out.println(id+" "+search);
        Specification spec=Specification.where(
                NotesSpecification.hasNoteHeadingLike(search))
                .and(NotesSpecification.hasId(id));
        return notesRepository.findAll(spec);
    }
}
