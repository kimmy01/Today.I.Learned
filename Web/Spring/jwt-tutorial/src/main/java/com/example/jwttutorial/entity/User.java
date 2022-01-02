package com.example.jwttutorial.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.*;

@Entity //DataBase Table과 1:1 매핑되는 객체
@Table(name = "user")
@Getter @Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
//Getter~Constructor : Lombok 어노테이션, Get, Set, Builder, Constructor 관련 코드 자동 생성
public class User {
    @JsonIgnore
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId; //자동 증가되는 PK

    @Column(name = "username", length = 50, unique = true)
    private String username;

    @JsonIgnore
    @Column(name = "password", length = 100)
    private String password;

    @Column(name = "nickname", length = 50)
    private String nickname;

    @JsonIgnore
    @Column(name = "activated")
    private boolean activated;

    @ManyToMany
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
    private Set<Authority> authorities; //권한에 대한 관계
    //user와 authority 테이블의 다:다 관계를 1:다, 다:1 관계의 조인 테이블로 정의했다는 의미
}
