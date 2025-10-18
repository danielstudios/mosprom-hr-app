package com.mosprom.hr.app.pre.repository;

import com.mosprom.hr.app.pre.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserName(String userName);
}
