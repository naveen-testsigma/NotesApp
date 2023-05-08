package com.example.notes.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

import javax.persistence.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class TodoList {
    @Id
    @GeneratedValue
    Long id;
    Long userId;
    String todoData;

}
