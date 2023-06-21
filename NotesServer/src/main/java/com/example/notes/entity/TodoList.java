package com.example.notes.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

import javax.persistence.*;
@Data
@Entity
@Table(name = "todo_list")
public class TodoList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    Long id;
    @Column(name="user_id")
    Long userId;
    @Column(name="todo_data")
    String todoData;

}
