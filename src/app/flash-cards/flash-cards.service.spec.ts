import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { FlashcardsService, Flashcard } from './flash-cards.service';

describe('FlashcardsService', () => {
  let service: FlashcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlashcardsService]
    });
    service = TestBed.inject(FlashcardsService);

  });

  it('test service', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const service: FlashcardsService = TestBed.get(FlashcardsService);
    expect(service).toBeTruthy();
   });
  it('test addCard', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const service: FlashcardsService = TestBed.get(FlashcardsService);
    expect(service.addCard).toBeTruthy();
   });
  it('test addCard2', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const service: FlashcardsService = TestBed.get(FlashcardsService);
    const card: Flashcard =   {
      pass: false,
      front: false,
      show: false,
      body: "",
      ans: "sada",
      question: "sda",
      id: 1,
      type: "angular"
    };
    // expect(service.addCard(card)).toBeTruthy();
    let svclist: any;
    service.getFlashcards().subscribe(l => {this.svclist = l;
           service.addCard(card);
           expect(svclist[0].id).toEqual(card.id);});

   });
});
