import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from '../models/auth.model';
import { Router } from '@angular/router';

const API_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class AccountsService implements OnInit {
  // mock user
  authUser: Auth = {
    currentUser: undefined,
    isAuthenticated: false,
    error_msg: undefined,
    success_msg: undefined
  }
  allUsers: User[] = [];
  public accountsServiceSubj: BehaviorSubject<Auth>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadAllUsers().subscribe(users => {
      this.allUsers = users;
      console.log(this.allUsers)
    })
  }

  ngOnInit() {
    // check localStorage first for logged in user
    this.isAuthenticated();
  }

  getBehaviorSubject(): BehaviorSubject<Auth> {
    if (!this.accountsServiceSubj) {
      this.accountsServiceSubj = new BehaviorSubject<Auth>(this.authUser);
    }
    return this.accountsServiceSubj;
  }

  isAuthenticated(): boolean {
    let authenticated = localStorage.getItem('userData') !== undefined && localStorage.getItem('userData') !== null;
    if (authenticated) {
      this.setCurrentUser();
    } else {
      this.clearCurrentUser();
    }
    return authenticated;
  }

  loadAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/Accounts`);
  }

  logIn(user: User) {
    // check validation
    console.log(this.allUsers);
    let isValidated: boolean = this.validateLogIn(user);

    if (isValidated) {
      let auth: Auth = {
        currentUser: user,
        isAuthenticated: true,
        error_msg: undefined,
        success_msg: 'You have logged in successfully'
      }
      this.authUser = { ...auth };
      this.accountsServiceSubj.next(this.authUser);

      // save userEmail to localStorage
      localStorage.setItem('userData', JSON.stringify({
        userName: user.userName,
        email: user.email
      }));

      // logged in success => route to Home page
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1000);
    } else {
      let auth: Auth = {
        currentUser: undefined,
        isAuthenticated: false,
        error_msg: "Invalid username/email/password. Check again!",
        success_msg: undefined
      }
      this.authUser = { ...auth };
      this.accountsServiceSubj.next(this.authUser);
    }
  }

  validateLogIn(user: User): boolean {
    let foundUser: User = this.allUsers.find((us: User) => us.email === user.email);
    // console.log('FOUND USER: ' + foundUser);

    if (foundUser !== undefined && foundUser !== null) {
      if (foundUser.userName === user.userName) {
        // correct username
        console.log('correct username');
        if (window.btoa(user.passWord) === foundUser.passWord) {
          // correct password ==> good
          console.log('Correct password');
          return true;
        } else {
          // wrong password
          console.log('Wrong password');
        }
      } else {
        // wrong username
        console.log('wrong username');
      }
    }
    return false;
  }

  logOut() {
    // clear Local storage
    localStorage.clear();
    this.clearCurrentUser();

    this.router.navigate(['/logIn']);
  }

  setCurrentUser() {
    let auth: Auth = {
      currentUser: {
        userName: JSON.parse(localStorage.getItem('userData'))['userName'],
        email: JSON.parse(localStorage.getItem('userData'))['email']
      },
      isAuthenticated: true
    }
    this.authUser = { ...auth };

    this.accountsServiceSubj.next(this.authUser);
  }

  clearCurrentUser() {
    let auth: Auth = {
      currentUser: undefined,
      isAuthenticated: false
    }
    this.authUser = { ...auth };
    this.accountsServiceSubj.next(new Auth());
  }

}
