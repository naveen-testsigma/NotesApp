package com.example.notes.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class NotesRequest {
    Long userId;
    String noteHeading;
    String noteBody;
}
