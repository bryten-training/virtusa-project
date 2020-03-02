import { Component, OnInit } from '@angular/core';
import { FlashCardsService, Flashcard} from '../flash-cards.service';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {
  flashcard: Flashcard;
  constructor(private CardSvc: FlashCardsService) {
  this.CardSvc.getFlashcard().subscribe(flashcard => {this.flashcard = flashcard;

  });
  console.log(this.flashcard);
}
  ngOnInit(): void {
  }

}
