package com.example.NoteApp.mapper;


import com.example.NoteApp.model.domain.User;
import com.example.NoteApp.model.dto.auth.AuthRegisterRequest;
import com.example.NoteApp.model.dto.auth.AuthResponse;

public interface AuthMapper {
    AuthResponse toResponse(User user, String token);
    User toUser(AuthRegisterRequest request, User user);
}
