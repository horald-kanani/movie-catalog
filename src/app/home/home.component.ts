import { Component, OnInit } from '@angular/core';

import { Movie } from '../model/movie';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  title:string ="";
  sortDirection:string ="";
  parameter :string ="";
  movies$: Observable<Movie[]>;

  constructor( private route:Router,private movieService:MovieService) { 

  }

  ngOnInit(): void {
    this.movies$ = this.movieService.loadMovies();
      this.movieService.loadMovies().subscribe(
        (data:Movie[])=>{
          this.movies = data;
        }
      );
    
  }
  onMovieSelected(movie:Movie):void{
    this.movieService.setSelectedMovie(movie);
    this.route.navigateByUrl('/details/' + movie.movieID);
    
  }
  onSuggest():void{
    
    let rand = Math.trunc(Math.random() * this.movies.length) ;
    this.route.navigateByUrl('/details/' + this.movies[rand].movieID)
  }

  
   
  }
  
    
  


