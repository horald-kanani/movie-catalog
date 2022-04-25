import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // movies:Movie[] = MOVIES;

  constructor() {}
  ngOnInit(): void {}

  title = 'movees-catalog';
}
