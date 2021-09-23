import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../movie';
import { MovieService } from '../../../service/movie.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private movieService: MovieService
    ) { }

  ngOnInit(): void {
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

}
