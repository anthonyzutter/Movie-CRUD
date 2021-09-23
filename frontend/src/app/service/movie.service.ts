import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class MovieService {

  // baseUrl: String = environment.baseUrl

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiServerUrl}/movie/all`);
  }

  public addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiServerUrl}/movie/add`, movie);
  }

  public updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiServerUrl}/movie/update`, movie);
  }

  public deleteMovie(movieId: String): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/movie/delete/${movieId}`);
  }

  findMovieById(id: String):Observable<Movie>{
    const url = `${this.apiServerUrl}/movie/find/${id}`
    return this.http.get<Movie>(url)
  }
}