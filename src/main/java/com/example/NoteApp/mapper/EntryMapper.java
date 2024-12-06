package com.example.NoteApp.mapper;

import com.example.NoteApp.model.domain.Entry;
import com.example.NoteApp.model.dto.entry.EntryRequest;
import com.example.NoteApp.model.dto.entry.EntryResponse;

import java.util.List;

public interface EntryMapper {
    Entry toEntry(EntryRequest request, Entry entry);
    EntryResponse toResponse(Entry entry);
    List<EntryResponse> toResponseList(List<Entry> entries);
}
