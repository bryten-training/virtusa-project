import { Component, OnInit } from '@angular/core';
import { FlashcardsService, Flashcard } from '../flash-cards.service';


@Component({
  selector: 'app-flash-cardlist',
  templateUrl: './flash-cardlist.component.html',
  styleUrls: ['./flash-cardlist.component.scss']
})
export class FlashCardlistComponent implements OnInit {
  flashcard = false;
  flashcardlist: Flashcard[] = [
    { id: 1, question: 'What is Angular?', ans: 'Angular is an open-source front-end web framework. It is one of the most popular JavaScript frameworks that is mainly maintained by Google. It provides a platform for easy development of web-based applications and empowers the front end developers in curating cross-platform applications. It integrates powerful features like declarative templates, an end to end tooling, dependency injection and various other best practices that smoothens the development path.' },

    { id: 2, question: 'What are the advantages of using Angular?', ans: 'It supports two-way data-binding It follows MVC pattern architecture' },
    { id: 3, question: 'What is Angular mainly used for?', ans: 'Test' },
    { id: 4, question: 'What are templates in Angular?', ans: 'test' },
  ];
  index: number = 0;
  constructor(private CardSvc: FlashcardsService) { }

  ngOnInit(): void {
    // this.CardSvc.getFlashcards().subscribe(list => {
    //   this.flashcardlist = list;
    //   console.log(list);
    // });

  }

  leftArrow() {

    if (this.index > 0) {
      this.index--;
    }
  }

  rightArrow() {
    if (this.index < this.flashcardlist.length - 1) {
      this.index++;
    }
  }
}
