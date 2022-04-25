import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../model/movie';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(movies:Movie[],filterTitle:string): Movie[] {
    if(!movies ||!filterTitle){
      
      return movies;
    }
    return movies.filter(movie =>
      movie.movieName.toLocaleLowerCase().includes(filterTitle.toLocaleLowerCase()));
    
  }

}
