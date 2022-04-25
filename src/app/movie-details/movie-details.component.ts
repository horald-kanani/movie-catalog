import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<Movie>;
  movie: Movie;
  constructor( private router: Router,private svc:MovieService) {
    
  }

  ngOnInit(): void {
    console.log(this.svc.selectedMovie);
    //this.movie$ = this.svc.selectedMovie;
    const movieId = this.router.url.split("/")[2];
    this.movie$ = this.svc.getMovieById(movieId);
    this.movie$.pipe(
      tap((movie)=>{
        console.log(movie);
        this.movie =movie;

      }
      )
    ).subscribe();
  
  }

}
