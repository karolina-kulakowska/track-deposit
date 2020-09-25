package com.example.lyricssite.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Album {

    @Id
    private String id;
    private String albumName;
    private Artist artist;
    private int releaseDate;
    private int amountOfTracks;

}
