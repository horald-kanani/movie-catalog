import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details/:movieId', component: MovieDetailsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, //wildcard redirects to root
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
