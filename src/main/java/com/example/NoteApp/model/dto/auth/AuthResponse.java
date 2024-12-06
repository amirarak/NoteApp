package com.example.NoteApp.model.dto.auth;

import lombok.Data;

@Data
public class AuthResponse {
    private Long id;
    private String token;
}
