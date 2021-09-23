import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { MovieService } from '../../service/movie.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = 'MoviesAngular';
  public movies!: Movie[];
  public editMovie!: Movie;
  public deleteMovie!: Movie;

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies(): void {
    this.movieService.getMovies().subscribe(
      (response: Movie[]) => {
        this.movies = response;
        // console.log(this.movies);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateMovie(movie: Movie): void {
    this.movieService.updateMovie(movie).subscribe(
      (response: Movie) => {
        // console.log(response);
        this.getMovies();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteMovie(movieId: String): void {
    this.movieService.deleteMovie(movieId).subscribe(
      (response: void) => {
        // console.log(response);
        this.getMovies();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(movie: Movie, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editMovie = movie;
      button.setAttribute('data-target', '#updateMovieModal');
    }
    if (mode === 'delete') {
      this.deleteMovie = movie;
      button.setAttribute('data-target', '#deleteMovieModal');
    }
    container!.appendChild(button); // !
    button.click();
  }

  public searchMovies(key: string): void {
    const results: Movie[] = [];
    for (const movie of this.movies) {
      if (movie.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || movie.overview.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || movie.genres.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || movie.year.toString().indexOf(key) !== -1) {
        results.push(movie);
      }
    }
    this.movies = results;
    if (results.length === 0 || !key) {
      this.getMovies();
    }
  }
}
