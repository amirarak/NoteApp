package com.example.NoteApp.service;

import com.example.NoteApp.model.dto.entry.EntryRequest;
import com.example.NoteApp.model.dto.entry.EntryResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface EntryService {
    List<EntryResponse> all();
    EntryResponse addEntry(EntryRequest entryRequest, List<MultipartFile> images, String token);
    EntryResponse updateEntry(EntryRequest entryRequest, String token, Long id);
    EntryResponse getEntry(Long id);
    void deleteEntry(Long id, String token);
}