import { Component, OnInit } from '@angular/core';
import { Movie } from "../../movie";
import { MovieService } from "../../service/movie.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie = {
    id: "",
    name: "",
    overview: "",
    genres: "",
    year: "",
    imageURL: "",
    trailerURL: "",
  };

  constructor(
    private service: MovieService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.movie.id = this.route.snapshot.paramMap.get("id")!;
    this.findMovieById()
  }

  findMovieById(): void {
    this.service.findMovieById(this.movie.id!).subscribe((resposta) => {
      this.movie = resposta
    })
  }
}
