import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts/services/accounts.service';
import { Auth } from '../accounts/models/auth.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean;
  currentUserName: string;

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accountsService.getBehaviorSubject().subscribe((auth: Auth) => {
      console.log('INSIDE NAVBAR:...' + JSON.stringify(auth, null, 2));
      this.isAuthenticated = auth.isAuthenticated;
      this.currentUserName = auth.currentUser ? auth.currentUser.userName : '';
    })
  }

  onLogOut() {
    this.accountsService.logOut();
  }

}
