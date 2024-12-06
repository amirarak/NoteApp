package com.example.NoteApp.controller;

import com.example.NoteApp.service.ImageService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/images")
public class ImageController {
    private final ImageService imageService;

    @DeleteMapping("/{imageName}")
    public void delete(@PathVariable String imageName) {
        imageService.delete(imageName);
    }
}
