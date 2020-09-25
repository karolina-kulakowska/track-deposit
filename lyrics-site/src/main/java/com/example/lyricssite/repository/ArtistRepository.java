package com.example.lyricssite.repository;

import com.example.lyricssite.model.Artist;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ArtistRepository extends MongoRepository<Artist, String> {

}
