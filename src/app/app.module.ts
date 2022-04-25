import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TomatoCardComponent } from './tomato-card/tomato-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    HomeComponent,
    SearchFilterPipe,
    SortPipe,
    TomatoCardComponent,
    HighlightedDirective,
    MovieDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
