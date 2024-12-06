package com.example.NoteApp.service;

import com.example.NoteApp.model.dto.auth.AuthLoginRequest;
import com.example.NoteApp.model.dto.auth.AuthRegisterRequest;
import com.example.NoteApp.model.dto.auth.AuthResponse;

public interface AuthService {
    AuthResponse register(AuthRegisterRequest request);
    AuthResponse login(AuthLoginRequest request);
}
