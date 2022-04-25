import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tomato-card',
  templateUrl: './tomato-card.component.html',
  styleUrls: ['./tomato-card.component.scss'],
})
export class TomatoCardComponent implements OnInit {
  @Input('tomatoScore')
  tomatoScore: string;

  constructor() {}

  ngOnInit(): void {}
}
