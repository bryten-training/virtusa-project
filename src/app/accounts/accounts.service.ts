import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user.model'
import { Observable, of } from 'rxjs';

// 

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  checkUser(): Observable<User>{
    return of();
  }


  
}
