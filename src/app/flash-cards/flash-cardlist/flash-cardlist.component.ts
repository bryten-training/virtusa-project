import { Component, OnInit } from '@angular/core';
import { FlashCardsService, Flashcard} from '../flash-cards.service';
import { Router } from '@angular/router';
import { nextTick } from 'q';
@Component({
  selector: 'app-flash-cardlist',
  templateUrl: './flash-cardlist.component.html',
  styleUrls: ['./flash-cardlist.component.scss']
})
export class FlashCardlistComponent implements OnInit {
  idx: number = 0;
  card: Flashcard;
  flashcardlist: Flashcard[] = [];
  constructor(private CardSvc: FlashCardsService, private router: Router) {

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
      console.log('b... ' + this.flashcardlist[this.idx]);
      this.card = this.flashcardlist[this.idx];
    });




  }
  nextcard() {
    this.card.show = false;
    this.card = this.flashcardlist[this.idx + 1];
    this.card.show = true;
  }
    getId(Id: number) {
      this.CardSvc.id = Id;
      this.router.navigate([`/card/`]);
  }

}
