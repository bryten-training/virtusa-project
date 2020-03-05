import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {
  subjects = [
    { name: 'Angular', uri: 'cards', imagePath: '/assets/img/angular.jpg' },
    { name: 'JavaScript', uri: 'cards',  imagePath: '/assets/img/js.jpg' },
    { name: 'NodeJS',  uri: 'cards', imagePath: '/assets/img/nodejs.jpg' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
