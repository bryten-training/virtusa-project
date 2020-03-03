import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model'
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  loggedInUser: User = null;
  userObs: Observable<User> = null;
  observ: Observer<User>;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<[User]> {
    return this.http.get<[User]>(`http://localhost:3000/Accounts`);
  }

  getUser(user: string, pass: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/Accounts?username=${user}&password=${pass}`);
  }

  register(user) {
    console.log(user);

    return this.http.post(`http://localhost:3000/Accounts`, user);
  }




}
