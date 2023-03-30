package com.example.notes.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class TodoList {
    @Id
    @GeneratedValue
    Long id;
//    Date created_date;
//    Date updated_date;
//    Date deadline;
    Long userId;
    String todoData;

}
