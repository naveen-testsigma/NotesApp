package com.example.notes.repository;

import com.example.notes.enitity.Notes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotesRepository extends JpaRepository<Notes,Long> {
    List<Notes> findByUserId(Long userId);
    List<Notes> findByNoteHeadingAndUserId(String word,Long id);
}
