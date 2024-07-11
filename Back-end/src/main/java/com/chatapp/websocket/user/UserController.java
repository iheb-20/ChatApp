package com.chatapp.websocket.user;

import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.repository.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController // Change to RestController for clearer mapping
@RequiredArgsConstructor
@RequestMapping("/chatapp")
public class UserController {

    private final UserService userService;

    @MessageMapping("/user.addUser")
    @SendTo("/user/public")
    public User addUser(@Payload User user) {
        userService.saveUser(user);
        return user;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> findConnectedUsers() {
        return ResponseEntity.ok(userService.findConnectedUsers());
    }

    @DeleteMapping("/logout")
    public ResponseEntity<Void> logoutUser(Authentication authentication) {
        String userEmail = authentication.getName(); // Get the email of the logged-in user
        Optional<User> userOptional = userService.findByEmail(userEmail);

        if (userOptional.isPresent()) {
            User user = userOptional.get(); // Get the User object from the Optional
            userService.logout(userOptional);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}


