package com.example.notes.repository;

import com.example.notes.entity.UserAuth;
import org.springframework.data.repository.CrudRepository;

public interface UserDaoRepository extends CrudRepository<UserAuth, Integer> {

    UserAuth findByUsername(String username);
}
