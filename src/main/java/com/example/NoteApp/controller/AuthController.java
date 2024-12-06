package com.example.NoteApp.controller;

import com.example.NoteApp.model.dto.auth.AuthLoginRequest;
import com.example.NoteApp.model.dto.auth.AuthRegisterRequest;
import com.example.NoteApp.model.dto.auth.AuthResponse;
import com.example.NoteApp.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public AuthResponse register(@RequestBody AuthRegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthLoginRequest request) {
        return authService.login(request);
    }
}
