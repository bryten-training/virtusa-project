import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {
  subjects = [
    { name: 'Angular', uri: 'Angular', imagePath: '/assets/img/angular.jpg' },
    { name: 'JavaScript', uri: 'JavaScript',  imagePath: '/assets/img/js.jpg' },
    { name: 'NodeJS',  uri: 'NodeJS', imagePath: '/assets/img/nodejs.jpg' },
    { name: 'Add',  uri: 'addcard', imagePath: '/assets/img/upload.jpeg' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
