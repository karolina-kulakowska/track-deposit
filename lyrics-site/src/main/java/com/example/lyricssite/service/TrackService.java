package com.example.lyricssite.service;

import com.example.lyricssite.model.Track;
import com.example.lyricssite.repository.TrackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrackService {

    @Autowired
    private TrackRepository trackRepository;

    public List<Track> getAllTracks() {
        return trackRepository.findAll();
    }

    public Track saveTrack(Track track){
        return trackRepository.save(track);
    }

    public Optional<Track> getTrackById(String id) {
        return trackRepository.findById(id);
    }
}
