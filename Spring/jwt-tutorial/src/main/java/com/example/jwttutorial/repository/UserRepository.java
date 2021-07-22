package com.example.jwttutorial.repository;

import com.example.jwttutorial.entity.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    @EntityGraph(attributePaths = "authorities") //lazy조회 X, eager조회 O => authorities 정보 같이 가져옴
    Optional<User> findOneWithAuthoritiesByUsername(String username);
    //username을 기준으로 User 정보를 가져올 때, 권한 정보도 같이 가져옴
}
