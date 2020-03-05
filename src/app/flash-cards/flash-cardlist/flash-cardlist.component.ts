import { Component, OnInit } from '@angular/core';
import { FlashcardsService, Flashcard } from '../flash-cards.service';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/accounts/services/accounts.service';
import { User } from 'src/app/accounts/models/user.model';
import { Auth } from 'src/app/accounts/models/auth.model';


@Component({
  selector: 'app-flash-cardlist',
  templateUrl: './flash-cardlist.component.html',
  styleUrls: ['./flash-cardlist.component.scss']
})
export class FlashCardlistComponent implements OnInit {
  flipped = false;
  imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH";
  index = 0;
  currentUser: User;
  flashcard: Flashcard;
  flashcardlist = [new Flashcard()];
  constructor(private CardSvc: FlashcardsService, private accountsService: AccountsService, private router: Router) {
    this.CardSvc.getFlashcard().subscribe(flashcard => { this.flashcard = flashcard; });





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
      this.flashcard.front = false;
    });
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
    // this.CardSvc.getFlashcard().pipe(tap(e => this.flashcard.pass));
    this.CardSvc.pass(this.flashcard).subscribe(_ => {
      this.router.navigate(['/cards']);
    });
  }

  reset() {
    this.flashcardlist.forEach(card => { card.pass = false; card.front = false; });
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

  onClickQuesAns(flashCard: Flashcard) {
    flashCard.front = !flashCard.front;
  }

  changeColorQuesAns(flashCard: Flashcard) {
    if (!flashCard.front) {
      return {
        "background-color": '#a8d0cc'
      }
    }
    return { "background-color": '#dedce9' }
  }
}

