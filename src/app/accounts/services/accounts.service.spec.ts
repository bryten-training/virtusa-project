import { TestBed } from '@angular/core/testing';

import { AccountsService } from './accounts.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../models/user.model';


describe('AccountsService', () => {
  let service: AccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
    service = TestBed.inject(AccountsService);
  });

  it('should AccountsService be created', () => {
    expect(service).toBeTruthy();
  });

  it('Login User credentials', () => {
    service.allUsers = [
      {
        userName: 'trungvo',
        email: 'vtt311096@gmail.com',
        passWord: 'cGFzcw=='
      },
      {
        userName: 'anish',
        email: 'anish@gmail.com',
        passWord: 'cGFzcw=='
      },
      {
        userName: 'yuxuan',
        email: 'yuxuan@gmail.com',
        passWord: 'cGFzcw=='
      }
    ]

    let user: User = {
      userName: 'trungvo',
      email: 'vtt311096@gmail.com',
      passWord: 'pass'
    }
    // expect(service.allUsers.length).toBe(3);
    expect(service.validateLogIn(user).isValidated).toBe(true);
  });

});
