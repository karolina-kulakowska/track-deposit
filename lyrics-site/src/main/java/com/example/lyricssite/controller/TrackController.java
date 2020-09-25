package com.example.lyricssite.controller;

import com.example.lyricssite.model.Track;
import com.example.lyricssite.service.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TrackController {

    @Autowired
    private TrackService trackService;

    @GetMapping("/tracks")
    public List<Track> getAllTracks(){
        return trackService.getAllTracks();
    }

    @PostMapping("/tracks/addTrack")
    public Track addTrack(@RequestBody Track track) {
        return trackService.saveTrack(track);
    }



}
