import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../model/movie';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(movies: Movie[],args: any[]): Movie[] {
   const sortedValue = args[0];
   const sortDirection = args[1];
   
   let multiplier = 1;
   if(!movies||!args){
     return movies;
   }
   else  {
   if (sortDirection ==="desc" )
     multiplier = -1;
       movies.sort((a: any, b: any) =>{
     if(a[sortedValue] < b[sortedValue]){
       return -1 * multiplier;

     }
     else if(a[sortedValue] > b[sortedValue]){
       return 1 * multiplier;
     }
     else{
       return 0;
     }

   }
   );
   return movies;

  }
   }
 

}
