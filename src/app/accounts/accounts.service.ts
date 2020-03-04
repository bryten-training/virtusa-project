import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model'
import { Observable, of, Observer } from 'rxjs';
import { tap, share } from 'rxjs/operators';

@Injectable()
export class AccountsService {

  loggedInUser: User = null;
  userObs: Observable<User> = null;
  observ: Observer<User>;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<[User]> {
    return this.http.get<[User]>(`/Accounts`);
  }

  getUser(email:string):Observable<[User]>{
    return this.http.get<[User]>(`/Accounts?email=${email}`);
  }

  register(user){
    //  hashing password
    user["password"] = window.btoa(user["password"]);
    return this.http.post(`http://localhost:3000/Accounts`, user);
  }




}
