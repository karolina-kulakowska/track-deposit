package com.example.lyricssite.controller;

import com.example.lyricssite.exceptions.TrackAlreadyExistsException;
import com.example.lyricssite.exceptions.TrackNotFoundException;
import com.example.lyricssite.exceptions.TrackUpdateNotAllowedException;
import com.example.lyricssite.model.Track;
import com.example.lyricssite.service.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<Track>> getAllTracks(){
        return ResponseEntity.ok(trackService.getAllTracks());
    }

    @GetMapping("/tracks/{id}")
    public ResponseEntity<Track> getTrackById(@PathVariable String id){
        return ResponseEntity.ok(trackService.getTrackById(id).orElseThrow(TrackNotFoundException::new));
    }

    @PostMapping("/tracks/addTrack")
    public ResponseEntity<Track> addTrack(@RequestBody Track track) {
        return new ResponseEntity<Track>(trackService.saveTrack(track).orElseThrow(TrackAlreadyExistsException::new), HttpStatus.CREATED);
    }


    /**
     * Need to fix
     */
    @PatchMapping("/tracks/{id}")
    public ResponseEntity<Track> updateTrack(@PathVariable String id, @RequestBody Track track){
       //return ResponseEntity.ok(trackService.updateTrack(id, track));
        return ResponseEntity.ok(trackService.updateTrack(id, track).orElseThrow(TrackUpdateNotAllowedException::new));
    }

    @DeleteMapping("/tracks/{id}")
    public Track deleteTrack(@PathVariable String id){
        return trackService.deleteTrack(id);
    }

}
