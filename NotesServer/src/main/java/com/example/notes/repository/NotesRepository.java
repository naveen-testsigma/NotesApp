package com.example.notes.repository;

import com.example.notes.entity.Notes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotesRepository extends JpaRepository<Notes,Long> , JpaSpecificationExecutor<Notes> {
    List<Notes> findByUserId(Long userId);
    List<Notes> findByUserIdAndNoteHeadingLike(Long id,String word);

}
