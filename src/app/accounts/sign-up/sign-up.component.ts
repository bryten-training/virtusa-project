import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signupForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    userType: new FormControl("", [Validators.required])
  });

  constructor(private accountsSrv: AccountsService) { }

  userTypes = ["admin", "content provider", "default"];

  onSubmit() {
    this.accountsSrv.checkUser(this.signupForm.value.username, this.signupForm.value.password).subscribe(response =>{
      console.log(response);
    });
    
  }
}
