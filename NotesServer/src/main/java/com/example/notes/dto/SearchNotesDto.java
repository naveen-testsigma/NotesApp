package com.example.notes.dto;

import lombok.Data;

@Data
public class SearchNotesDto {
    Long userId;
    String noteHeading;
}
