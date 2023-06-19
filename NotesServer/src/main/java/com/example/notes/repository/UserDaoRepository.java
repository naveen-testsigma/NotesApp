package com.example.notes.repository;

import com.example.notes.entity.User;
import com.example.notes.entity.UserAuth;
import org.springframework.data.repository.CrudRepository;

public interface UserDaoRepository extends CrudRepository<User, Integer> {

    User findByEmailId(String username);
}
