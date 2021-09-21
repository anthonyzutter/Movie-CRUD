import { Component, OnInit } from '@angular/core';
import { Movie } from "../movie";
import { MovieService } from "../movie.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

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
    private router: Router
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
