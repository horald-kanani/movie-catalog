import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie:Movie;
  @Output()
  movieSelected = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {
  }
 
onClick(){
  this.movieSelected.emit(this.movie);
}
}
