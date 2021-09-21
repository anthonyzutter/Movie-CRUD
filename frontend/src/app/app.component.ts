import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MoviesAngular';
  public movies!: Movie[];
  // public editMovie!: Movie;
  // public deleteMovie!: Movie;

  constructor(private movieService: MovieService){}

  ngOnInit() {
    //this.getMovies();
  }

  // public getMovies(): void {
  //   this.movieService.getMovies().subscribe(
  //     (response: Movie[]) => {
  //       this.movies = response;
  //       // console.log(this.movies);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  public onAddMovie(addForm: NgForm): void {
    document.getElementById('add-movie-form')!.click(); // !
    this.movieService.addMovie(addForm.value).subscribe(
      (response: Movie) => {
        // console.log(response);
        // this.getMovies();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  
  public onOpenModal(movie: Movie, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMovieModal');
    }
    container!.appendChild(button); // !
    button.click();
  }
}