import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  cardCache: { [id: number]: Flashcard } = {};

  id: number = 1;

  constructor(private http: HttpClient) { }

  getFlashcards(): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`http://localhost:3000/flashcard`);
  }
  getFlashcard(): Observable<Flashcard> {
    return this.http.get<Flashcard>(`http://localhost:3000/flashcard/${this.id}`);
  }
  getLoginFlashcards(): Observable<User> {
    return this.http.get<User>(` /userdata`);
  }
  addCard(flashcard: Flashcard): Observable<any> {
    const cardCache = this.cardCache[flashcard.id];

    return this.http.post<Flashcard>(`/flashcards/`, flashcard).pipe(
      tap(_ => this.cardCache[flashcard.id]),
    );
  }
}
export class Flashcard {
  id: number;
  question: string;
  ans: string;
  body?: string;
  front?: boolean;
}
export class User {
  id: number;
  card: Flashcard[];
}
