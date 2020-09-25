package com.example.lyricssite.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Document
public class Artist {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String albums;
    private Integer albumsCounter;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAlbums() {
        return albums;
    }

    public void setAlbums(String albums) {
        this.albums = albums;
    }

    public Integer getAlbumsCounter() {
        return albumsCounter;
    }

    public void setAlbumsCounter(Integer albumsCounter) {
        this.albumsCounter = albumsCounter;
    }



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Artist author = (Artist) o;
        return Objects.equals(id, author.id) &&
                Objects.equals(firstName, author.firstName) &&
                Objects.equals(lastName, author.lastName) &&
                Objects.equals(albums, author.albums) &&
                Objects.equals(albumsCounter, author.albumsCounter);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, albums, albumsCounter);
    }
}
