import { TestBed } from '@angular/core/testing';

import { FlashcardsService } from './flash-cards.service';

describe('FlashCardsService', () => {
  let service: FlashcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
