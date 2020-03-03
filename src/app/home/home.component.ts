import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts/services/accounts.service';
import { Auth } from '../accounts/models/auth.model';
import { User } from '../accounts/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accountsService.getObservable().subscribe((auth: Auth) => {
      this.currentUser = auth.currentUser;
    })
  }

}
