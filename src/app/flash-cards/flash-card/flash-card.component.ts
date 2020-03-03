import { Component, OnInit } from '@angular/core';
import { FlashCardsService, Flashcard} from '../flash-cards.service';
import { Router } from '@angular/router';

import { tap, map} from 'rxjs/operators';
@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {
  flashcard: Flashcard;
  constructor(private CardSvc: FlashCardsService, private router: Router) {
  this.CardSvc.getFlashcard().subscribe(flashcard => {this.flashcard = flashcard; });

}
  ngOnInit(): void {
  }

  passcard() {
    this.flashcard.pass = !this.flashcard.pass;
    // this.CardSvc.getFlashcard().pipe(tap(e => this.flashcard.pass));
    this.CardSvc.pass(this.flashcard).subscribe(_ => {
      this.router.navigate(['/card']);


  });
}

  addcard() {
    this.CardSvc.pass(this.flashcard).subscribe(_ => {
      this.router.navigate(['/']);


  });
  }
  // checkbox(){

  // }

}
