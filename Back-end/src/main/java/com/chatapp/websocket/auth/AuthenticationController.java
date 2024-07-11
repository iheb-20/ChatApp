package com.chatapp.websocket.auth;

import com.chatapp.websocket.user.Status;
import com.chatapp.websocket.user.User;
import com.chatapp.websocket.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController

@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService service;
    private final UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody authenticationRequest request) {
        AuthenticationResponse response = service.authenticate(request);

        // Check if authentication was successful before setting user status to online
        if (response != null && response.getToken() != null) {
            Optional<User> userOptional = userRepository.findByEmail(request.getEmail());
            userOptional.ifPresent(user -> {
                user.setStatus(Status.ONLINE);
                userRepository.save(user);
            });
            // Set authentication success message
            response.setMessage("Authentication successful");
        } else {
            // Set authentication failure message
            response = AuthenticationResponse.builder().message("Authentication failed").build();
        }

        return ResponseEntity.ok(response);
    }




}
