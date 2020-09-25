package com.example.lyricssite.controller;

import com.example.lyricssite.model.Artist;
import com.example.lyricssite.service.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ArtistController {

    @Autowired
    private ArtistService artistService;

    @GetMapping("/artists")
    public List<Artist> getAllArtists(){
        return artistService.getAllArtists();
    }
}
