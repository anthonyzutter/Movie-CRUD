package com.anthony.movies.movie;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    void deleteMovieById(Long id); // ????

    Optional<Movie> findMovieById(Long id);
}
