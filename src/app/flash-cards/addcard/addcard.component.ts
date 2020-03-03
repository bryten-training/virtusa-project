import { Component, OnInit } from '@angular/core';
import { FlashCardsService, Flashcard} from '../flash-cards.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.scss']
})
export class AddcardComponent implements OnInit {

  card: Flashcard = new Flashcard();
  flashcardlist: Flashcard[] = [];
  constructor(private cardSvc: FlashCardsService, private router: Router) { }

  ngOnInit(): void {
    this.cardSvc.getFlashcards().subscribe(list => { this.flashcardlist = list;
    });

  }
  add_Card() {
    this.cardSvc.addCard(this.card).subscribe(_ => { this.card.id = this.flashcardlist.length,
      this.card.front = true,
      this.card.body  = '',
      this.router.navigate(['/']);
    });
}
}
