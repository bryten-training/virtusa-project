
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  cardCache: {[id: number]: Flashcard} = {};
  // userCard: { [card: [Flashcard]]} = {};
   // tslint:disable-next-line:no-inferrable-types
   id: number = 1;

  constructor(private http: HttpClient) { }

  getFlashcards(): Observable <Flashcard[]> {
    return this.http.get<Flashcard[]> (`http://localhost:3000/flashcards`);
  }
  getFlashcard(): Observable <Flashcard> {
    return this.http.get<Flashcard> (`http://localhost:3000/flashcards/${this.id}`);
  }
  // getLoginFlashcards(): Observable <User> {
  //   return this.http.get<User> (` /userdata`);
  // }
  addCard(flashcard: Flashcard): Observable <any> {
    // const cardCache = this.cardCache[flashcard.id];
    // console.log("flash card :    "+flashcard.id);
    //  console.log("a:   " + this.cardCache[flashcard.id]);
    return this.http.post<Flashcard>(`http://localhost:3000/flashcards/`, flashcard);
    // .pipe(
    // tap(card => flashcard
    //     ),
    // );
  }
  pass(flashcard: Flashcard): Observable<any> {
    const cardCache = this.cardCache[flashcard.id];
    console.log(flashcard);
    const obs = this.http.put(`http://localhost:3000/flashcards/${flashcard.id}`, flashcard).pipe(
      tap(val => {
        console.log(val);
        this.cardCache[flashcard.id] = flashcard;
      })
    );
    return obs;
  }
}

export class Flashcard {
  id: number;
  question: string;
  ans: string;
  body: string;
  front: boolean;
  pass: boolean;
  show: boolean;

  constructor() {
    this.pass = false;
    this.front = false;
    this.show = false;
  }
}
