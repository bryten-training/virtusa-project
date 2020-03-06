// import { TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccountsService } from 'src/app/accounts/services/accounts.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [AccountsService]
    }).compileComponents();
    service = TestBed.inject(ArticlesService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });
  fit('test articles service', (done) => {
    service.get('api/articles').subscribe(articles => {
      expect(articles).toBeTruthy();
      done();
    });
    let httpController: HttpTestingController = TestBed.get(HttpTestingController);
    let mockRequest = httpController.expectOne('api/articles');

    mockRequest.flush({
      "id": 1
    })
  })
});
