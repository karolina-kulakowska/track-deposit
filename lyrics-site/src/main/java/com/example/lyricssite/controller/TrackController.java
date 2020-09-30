package com.example.lyricssite.controller;

import com.example.lyricssite.model.Track;
import com.example.lyricssite.service.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class TrackController {

    @Autowired
    private TrackService trackService;

    @GetMapping("/tracks")
    public List<Track> getAllTracks(){
        return trackService.getAllTracks();
    }

    @GetMapping("/tracks/{id}")
    public Optional<Track> getTrackById(@PathVariable String id){
        return trackService.getTrackById(id);
    }

    @PostMapping("/tracks/addTrack")
    public Track addTrack(@RequestBody Track track) {
        return trackService.saveTrack(track);
    }


    /**
     *
     * Need to fix
     */
    @PutMapping("/tracks/{id}")
    public Track updateTrack(@PathVariable String id, @RequestBody Track track){
        return trackService.updateTrack(id, track);
    }

    @DeleteMapping("/tracks/{id}")
    public Track deleteTrack(@PathVariable String id){
        return trackService.deleteTrack(id);
    }

}
