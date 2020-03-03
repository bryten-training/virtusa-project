import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model'
import { Observable, of, Observer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  loggedInUser: User = null;
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

  register(user) {
    return this.http.post(`/userdata`, user);
  }

  private hashPass(pass: string): string {
    return "A!2cbfgr125!!?7895";
  }

  getUser(): Observable<User> {
    return of(this.loggedInUser);
  }




}
