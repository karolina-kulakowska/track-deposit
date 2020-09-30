package com.example.lyricssite.service;

import com.example.lyricssite.exceptions.TrackNotFoundException;
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

    public Track updateTrack(String id, Track track) {
//        Optional<Track> existingTrack = Optional.ofNullable(trackRepository.findById(id)
//                .orElseThrow(() -> new TrackNotFoundException()));
//        track.setLyrics(track.getLyrics());
//        track.setTitle(track.getTitle());
//        return trackRepository.save(track);
        Track trackTemporary = trackRepository.findById(id)
                .orElseThrow(() -> new TrackNotFoundException());

        trackTemporary.setTitle(track.getTitle());
        trackTemporary.setLyrics(track.getLyrics());

        return trackRepository.save(track);
    }

    public Track deleteTrack(String id) {
        Track trackTemporary = trackRepository.findById(id)
                .orElseThrow(() -> new TrackNotFoundException());
        trackRepository.deleteById(id);
        return trackTemporary;
    }
}
