package com.anthony.movies.movie;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Movie implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    @Column(columnDefinition = "TEXT")
    private String overview;
    private String genres;
    private Integer year;
//    @Lob
    @Column(
            unique = true,
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String imageURL;
    private String trailerURL;

    public Movie() { }

    public Movie(Long id, String name, String overview, String genres, Integer year, String imageURL, String trailerURL) {
        this.id = id;
        this.name = name;
        this.overview = overview;
        this.genres = genres;
        this.year = year;
        this.imageURL = imageURL;
        this.trailerURL = trailerURL;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public String getGenres() {
        return genres;
    }

    public void setGenres(String genres) {
        this.genres = genres;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getTrailerURL() {
        return trailerURL;
    }

    public void setTrailerURL(String trailerURL) {
        this.trailerURL = trailerURL;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", overview='" + overview + '\'' +
                ", genres='" + genres + '\'' +
                ", year=" + year +
                ", imageURL='" + imageURL + '\'' +
                ", trailerURL='" + trailerURL + '\'' +
                '}';
    }



}
