package com.example.lyricssite;

import com.example.lyricssite.model.Track;
import com.example.lyricssite.repository.TrackRepository;
import com.example.lyricssite.service.TrackService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;


@SpringBootTest
public class TrackServiceTest {

    @Autowired
    private TrackService trackService;

    @MockBean
    private TrackRepository trackRepository;

    @Test
    @DisplayName("Test getAllTracks")
    void testGetAllTracks() {
        Track track1 = new Track("1abc", "Track1 title", "Track1 artist");
        Track track2 = new Track("2abc", "Track2 title", "Track2 artist");
        Mockito.doReturn(Arrays.asList(track1,track2)).when(trackRepository).findAll();

        List<Track> tracks = trackService.getAllTracks();

        Assertions.assertEquals(2, tracks.size(), "getAllTracks should return 2 tracks");
    }

    @Test
    @DisplayName("Test saveTrack")
    void testSaveTrack() {
        Track track = new Track("1abc", "Track title", "Track artist");
        Mockito.doReturn(track).when(trackRepository).save(ArgumentMatchers.any());

        Optional<Track> returnedTrack = trackService.saveTrack(track);

        Assertions.assertNotNull(returnedTrack, "The saved track should not be null");
        Assertions.assertEquals(Optional.of(track), returnedTrack);
    }

}
