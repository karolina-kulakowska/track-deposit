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

    public Optional<Track> saveTrack(Track track){
        return Optional.of(trackRepository.save(track));
    }

    public Optional<Track> getTrackById(String id) {
        return trackRepository.findById(id);
    }

    public Optional<Track> updateTrack(String id, Track track) {
        Optional<Track> existingTrack = Optional.ofNullable(trackRepository.findById(id)
                .orElseThrow(TrackNotFoundException::new));

        Track tr = existingTrack.get();
        tr.setArtist(track.getArtist());
        tr.setTitle(track.getTitle());
        return Optional.of(trackRepository.save(tr));

//        Track trackTemporary = trackRepository.findById(id)
//                .orElseThrow(TrackNotFoundException::new);
//
//        trackTemporary.setTitle(track.getTitle());
//        trackTemporary.setLyrics(track.getLyrics());
//
//        return trackRepository.save(track);
//        if (id.equals(track.getId())){
//            Optional<Track> trackInDataBase = trackRepository.findById(id);
//            if (trackInDataBase.isPresent()){
//                return Optional.of(trackRepository.save(track));
//            } else  {
//                return  Optional.empty();
//            }
//        } else {
//            throw new CannotUpdateTrackException();
//        }
    }

    public Track deleteTrack(String id) {
        Track trackTemporary = trackRepository.findById(id)
                .orElseThrow(TrackNotFoundException::new);
        trackRepository.deleteById(id);
        return trackTemporary;
    }
}
