package com.example.notes.enitity;

import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Notes {
    @Id
    Long id;
//    Date created_date;
//    Date updated_date;
    Long userId;
    String noteHeading;
    String noteBody;
}
