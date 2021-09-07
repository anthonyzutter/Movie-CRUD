package com.anthony.movies.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class MovieService {
    private final MovieRepository movieRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public Movie addMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    public List<Movie> findAllMovies() {
        return movieRepository.findAll();
    }

    public Movie updateMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    public Movie findMovieById(Long id) {
        return movieRepository.findMovieById(id)
                .orElseThrow(() -> new IllegalStateException("Movie by id " + id + " was not found"));
    }

    public void deleteMovie(Long id){
        movieRepository.deleteMovieById(id);
    }
}
