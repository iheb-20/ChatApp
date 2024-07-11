package com.chatapp.websocket.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String token;
    private String userId;
    private String message; // Add message field to indicate authentication result

    public AuthenticationResponse(String userSuccessfullyCreated) {
    }
}

