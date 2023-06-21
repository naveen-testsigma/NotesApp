package com.example.notes.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class SearchNotesRequest {
    Long userId;
    String noteHeading;
}
