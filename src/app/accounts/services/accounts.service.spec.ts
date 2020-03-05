import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AccountsService } from './accounts.service';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { AppModule } from 'src/app/app.module';


describe('AccountsService', () => {
  let service: AccountsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountsService, Router],
    });



    service = TestBed.inject(AccountsService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should get a populated array', () => {
    service.loadAllUsers().subscribe((data: any) => {
      expect(data.length > 0).toBeTruthy
    });

    const req = httpMock.expectOne(`api/accounts`, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush(["1","2"]);

    httpMock.verify();

  })

})
