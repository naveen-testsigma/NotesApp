package com.example.notes.mapper;

import com.example.notes.entity.Notes;
import com.example.notes.request.NotesRequest;
import lombok.Data;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface NotesMapper {

    Notes notesRequestToNotes(NotesRequest notesRequest);
}
