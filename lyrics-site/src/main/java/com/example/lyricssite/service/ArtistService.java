package com.example.lyricssite.service;

import com.example.lyricssite.model.Artist;
import com.example.lyricssite.repository.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistService {

    @Autowired
    private ArtistRepository artistRepository;

    public List<Artist> getAllArtists(){
        return artistRepository.findAll();
    }
}
