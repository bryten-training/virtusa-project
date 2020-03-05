import { Component, OnInit } from '@angular/core';
import { FlashcardsService, Flashcard } from '../flash-cards.service';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/accounts/services/accounts.service';
import { User } from 'src/app/accounts/models/user.model';
import { Auth } from 'src/app/accounts/models/auth.model';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  index = 0;
  currentUser: User;
  flashcard: Flashcard;
  flashcardlist = [new Flashcard()];
  constructor(private CardSvc: FlashcardsService, private accountsService: AccountsService, private router: Router) {
  this.CardSvc.getFlashcard().subscribe(flashcard => {this.flashcard = flashcard; });
  this.CardSvc.getFlashcards().subscribe(list => {
    console.log(list);
    this.setlist(list);

    console.log(' ' + this.flashcardlist[this.index]);
    this.flashcard = this.flashcardlist[this.index];
    this.flashcard.front = false;
  });
}

setlist(list) {
  console.log('in setlist');
  this.flashcardlist = list.filter(card => card.pass !== true);
}
  ngOnInit(): void {




    this.accountsService.getBehaviorSubject().subscribe((auth: Auth) => {
      // print out user info
      console.log('HOME COMP: ' + JSON.stringify(auth.currentUser, null, 2));

      // set currentUser for your component (if needed)
      this.currentUser = auth.currentUser;
    });


  }

  passcard() {
    this.flashcard = this.flashcardlist[this.index];
    this.flashcard.pass = !this.flashcard.pass;
    this.CardSvc.pass(this.flashcard).subscribe(_ =>
    this.router.navigate(['card/cards']));
    // this.flashcardlist.splice(this.flashcardlist[this.index].id, 0);
    // this.rightArrow();
}

  reset() {

    this.CardSvc.getFlashcards().subscribe(list => list.forEach(card => {card.pass = false, card.front = false,
      this.CardSvc.pass(card).subscribe(_ => {
       this.flashcard = card;
      });
    })
    );
    window.location.reload();
  }
  addcard() {
    this.CardSvc.pass(this.flashcard).subscribe(_ => {
      this.router.navigate(['/']);


  });
}
  deletecard(flashcard: Flashcard) {
    this.CardSvc.deleteBook(flashcard).subscribe(_ => {
        this.flashcardlist = this.flashcardlist.filter(b => b.id !== this.flashcard.id);
        console.log(this.flashcardlist[0].id);
        console.log(flashcard.id);
        // this.router.navigate(['card/cards']);
        window.location.reload();
    });
  }

  leftArrow() {
    if (this.index === 0) {
      this.index = this.flashcardlist.length - 1;
       } else {
        this.index--;
       }
    // while (this.flashcardlist[this.index].pass === true) {
    //   if (this.index < 0) {
    //     this.index = this.flashcardlist.length;
    //      } else {
    //       this.index--;
    //      }
    // }

  }
  rightArrow() {

    if (this.index === this.flashcardlist.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
  }

  onClickQuesAns(flashCard: Flashcard) {
    flashCard.front = !flashCard.front;
  }

  changeColorQuesAns(flashCard: Flashcard) {
    if (!flashCard.front) {
      return {
        'background-color': '#a8d0cc'
      };
    }
    return { 'background-color': '#dedce9' };
  }
}

