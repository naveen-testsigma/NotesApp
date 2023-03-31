package com.example.notes.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Notes {
    @Id
    @GeneratedValue
    Long id;
    Long userId;
    String noteHeading;
    String noteBody;
}
