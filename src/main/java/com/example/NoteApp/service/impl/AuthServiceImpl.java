package com.example.NoteApp.service.impl;

import com.example.NoteApp.config.JwtService;
import com.example.NoteApp.exception.CustomException;
import com.example.NoteApp.mapper.AuthMapper;
import com.example.NoteApp.model.domain.User;
import com.example.NoteApp.model.dto.auth.AuthLoginRequest;
import com.example.NoteApp.model.dto.auth.AuthRegisterRequest;
import com.example.NoteApp.model.dto.auth.AuthResponse;
import com.example.NoteApp.model.enums.Role;
import com.example.NoteApp.repository.UserRepository;
import com.example.NoteApp.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final AuthMapper authMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponse register(AuthRegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new CustomException("User is already registered!", HttpStatus.NOT_FOUND);
        }
        User user = authMapper.toUser(request, new User());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.valueOf(request.getRole()));
        userRepository.save(user);
        String token = jwtService.generateToken(user);
        return authMapper.toResponse(user, token);
    }

    @Override
    public AuthResponse login(AuthLoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new CustomException("User not found!", HttpStatus.NOT_FOUND));

        return authMapper.toResponse(user, jwtService.generateToken(user));
    }
}

