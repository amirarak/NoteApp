package com.example.NoteApp.service;

import com.example.NoteApp.model.domain.Entry;
import com.example.NoteApp.model.domain.Image;
import org.springframework.web.multipart.MultipartFile;

public interface ImageService {
    Image save(MultipartFile image, Entry entry);
    void delete(String filename);
}
