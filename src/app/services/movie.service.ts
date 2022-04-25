import { HttpClient } from '@angular/common/http';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../model/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  selectedMovie:Movie;
  movies:Movie[];

  constructor(private http:HttpClient) { 
    this.http.get<Movie[]>('/assets/MovieCatalog.json')
    .subscribe(m=>{
      this.movies = m;
    });
    
  }

  loadMovies():Observable<Movie[]>{
  return this.http.get<Movie[]>('/assets/MovieCatalog.json');
 
 
   }
   setSelectedMovie(movie:Movie){
     this.selectedMovie =movie;
   }
   getMovieById(id:string):Observable<Movie>{
     console.log(this.movies);


     return this.http.get<Movie[]>('/assets/MovieCatalog.json').pipe(
     map((movies)=>{
       console.log(movies);
      return movies.find((m)=>{
        return m.movieID.toString()===id; 

      }
      );
     
       })
    )
    


   }
}
