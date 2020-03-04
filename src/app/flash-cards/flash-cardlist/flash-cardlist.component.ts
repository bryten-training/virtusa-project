import { Component, OnInit } from '@angular/core';
import { FlashcardsService, Flashcard } from '../flash-cards.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flash-cardlist',
  templateUrl: './flash-cardlist.component.html',
  styleUrls: ['./flash-cardlist.component.scss']
})
export class FlashCardlistComponent implements OnInit {
  index = 0;

  flashcard: Flashcard;
  flashcardlist = [new Flashcard()];
  constructor(private CardSvc: FlashcardsService, private router: Router) {
  this.CardSvc.getFlashcard().subscribe(flashcard => {this.flashcard = flashcard; });

}
setlist(list) {
  console.log('in setlist');
  this.flashcardlist = list;
}
  ngOnInit(): void {
    this.CardSvc.getFlashcards().subscribe(list => {
      console.log(list);
      this.setlist(list);
      list[0].show = true;
      console.log(' ' + this.flashcardlist[this.index]);
      this.flashcard = this.flashcardlist[this.index];
    });
  }

  passcard() {
    this.flashcard = this.flashcardlist[this.index];
    this.flashcard.pass = !this.flashcard.pass;
    // this.CardSvc.getFlashcard().pipe(tap(e => this.flashcard.pass));
    this.CardSvc.pass(this.flashcard).subscribe(_ => {
      this.router.navigate(['/cards']);


  });
}

  addcard() {
    this.CardSvc.pass(this.flashcard).subscribe(_ => {
      this.router.navigate(['/']);


  });

  }
  leftArrow() {
   if (this.index > 0) {
      this.index--;
       }
    // while (this.flashcardlist[this.index].pass === false && this.index > 0) {
    //   this.index--;
    // }

  }
  rightArrow() {

    if (this.index < this.flashcardlist.length - 1) {
      this.index++;
    }
  }
}

