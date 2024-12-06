package com.example.NoteApp.mapper.impl;

import com.example.NoteApp.mapper.AuthMapper;
import com.example.NoteApp.model.domain.User;
import com.example.NoteApp.model.dto.auth.AuthRegisterRequest;
import com.example.NoteApp.model.dto.auth.AuthResponse;
import org.springframework.stereotype.Component;

@Component
public class AuthMapperImpl implements AuthMapper {
    @Override
    public AuthResponse toResponse(User user, String token) {
        AuthResponse response = new AuthResponse();
        response.setId(user.getId());
        response.setToken(token);
        return response;
    }

    @Override
    public User toUser(AuthRegisterRequest request, User user) {
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        return user;
    }
}
