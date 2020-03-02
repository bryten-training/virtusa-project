import { Component, OnInit } from '@angular/core';
import { FlashCardsService, Flashcard} from '../flash-cards.service';

@Component({
  selector: 'app-flash-cardlist',
  templateUrl: './flash-cardlist.component.html',
  styleUrls: ['./flash-cardlist.component.scss']
})
export class FlashCardlistComponent implements OnInit {
  flashcardlist: Flashcard[] = [];
  constructor(private CardSvc: FlashCardsService) { }

  ngOnInit(): void {
    this.CardSvc. getFlashcards().subscribe(list => {this.flashcardlist = list;
    });
    console.log(this.flashcardlist);
  }

}
