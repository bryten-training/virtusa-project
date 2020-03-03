import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model'
import { Observable, of, Observer } from 'rxjs';
import { tap, share } from 'rxjs/operators';

@Injectable()
export class AccountsService {

  loggedInUser: User = null;
<<<<<<< HEAD
  obs: Observable<User> = null;
  observ: Observer<User> = null;

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<[User]> {
    return this.http.get<[User]>(`/userdata`);
  }

  checkUser(user: string, pass: string): Observable<User> {
    return this.http.get<User>(`/userdata?username=${user}&password=${pass}`).pipe(
      tap(data => {
        this.loggedInUser = data;
      })
    );
  }

  signout() {
    this.loggedInUser = null;
  }
=======
  userObs: Observable<User> = null;
  observ: Observer<User>;

  constructor(private http: HttpClient) {}
>>>>>>> b9795af755cf60fb3c4fa17e850d265c1335aa83

  getAllUsers(): Observable<[User]> {
    return this.http.get<[User]>(`/Accounts`);
  }

<<<<<<< HEAD
  private hashPass(pass: string): string {
    return "A!2cbfgr125!!?7895";
  }

  getUser(): Observable<User> {
    return of(this.loggedInUser);
=======
  getUser(user:string, pass:string):Observable<User>{
    return this.http.get<User>(`/Accounts?username=${user}&password=${pass}`);
  }

  register(user){
    console.log(user);
    
    return this.http.post(`http://localhost:3000/Accounts`, user);
>>>>>>> b9795af755cf60fb3c4fa17e850d265c1335aa83
  }




}
