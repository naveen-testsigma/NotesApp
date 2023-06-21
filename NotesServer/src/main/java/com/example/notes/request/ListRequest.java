package com.example.notes.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
public class ListRequest {
    Long id;
    Long userId;
    String todoData;

}
