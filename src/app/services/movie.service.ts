import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  selectedMovie(selectedMovie: any) {
    throw new Error('Method not implemented.');
  }
  getMovieById(movieId: string): import("rxjs").Observable<import("../model/movie").Movie> {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
