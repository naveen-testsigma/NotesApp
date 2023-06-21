package com.example.notes.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
@Data
@Entity
@Table(name="notes")
public class Notes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    Long id;
    @Column(name="user_id")
    Long userId;
    @Column(name="note_heading")
    String noteHeading;
    @Column(name="note_body")
    String noteBody;
}
