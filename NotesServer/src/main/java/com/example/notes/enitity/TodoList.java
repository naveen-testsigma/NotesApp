package com.example.notes.enitity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@Entity
public class TodoList {
    @Id
    Long id;
    Date created_date;
    Date updated_date;
    Long user_id;
    String todo_data;
    Date deadline;
}
