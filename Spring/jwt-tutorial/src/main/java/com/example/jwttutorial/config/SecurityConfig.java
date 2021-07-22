package com.example.jwttutorial.config;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity //기본적인 웹보안 활성화하는 어노테이션
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    //h2콘솔 하위 모든 요청들과 파비콘 관련 요청은 Spring Security로직을 수행하지 않고 접근할 수 있게 configure메소드 오버라이드 하여 추가
    @Override
    public void configure(WebSecurity web){
        web
                .ignoring()
                .antMatchers(
                        "/h2-console/**"
                        , "/favicon.ico"
                );
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests() //HttpServletRequest를 사용하는 요청들에 대한 접근제한 설정
                .antMatchers("/api/hello").permitAll() //api/hello에 대해서는 인증 없이 접근 허용
                .anyRequest().authenticated(); //나머지 요청은 모두 인증 받아야 함
    }
}
