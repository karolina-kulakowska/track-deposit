package com.example.lyricssite;

import com.example.lyricssite.controller.TrackController;
import com.example.lyricssite.service.TrackService;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class TrackControllerTest {

    @InjectMocks
    TrackController trackController;

    @Mock
    TrackService trackService;

    @BeforeEach
    void setUp() throws Exception{
        MockitoAnnotations.initMocks(this);
    }
}
