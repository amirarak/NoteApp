package com.example.NoteApp.repository;

import com.example.NoteApp.model.domain.Image;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    @Transactional
    void deleteByName(String filename);
}
