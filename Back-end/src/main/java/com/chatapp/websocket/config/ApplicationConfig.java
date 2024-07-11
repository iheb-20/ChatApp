package com.chatapp.websocket.config;

import com.chatapp.websocket.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    @Autowired

    private final UserRepository repository;
    @Bean
    public UserDetailsService userDetailsService() {
        System.out.println();
        return email ->  repository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("username not found"));
    }
    @Bean
        public AuthenticationProvider authenticationProvider(){
                DaoAuthenticationProvider authprovider = new DaoAuthenticationProvider();
                authprovider.setUserDetailsService(userDetailsService());
                authprovider.setPasswordEncoder( passwordEncoder());
                return authprovider;


            }
            @Bean
            public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
                System.out.println("request.getEmail()");
                return config.getAuthenticationManager();
            }
@Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

