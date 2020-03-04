import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  userTypes: string[] = ["content provider", "default"];
  user: User = new User();

  signupForm = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    passWord: new FormControl("", [Validators.required]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    userType: new FormControl("", [Validators.required])
  });

  constructor(private registerService: RegisterService, private router: Router) {
    this.registerService.getAllUsers().subscribe(res => {
      console.log(res);
    });
    console.log("User: " + this.registerService.loggedInUser);
  }

  onRegister() {
    this.user = this.signupForm.value;

    this.registerService.register(this.signupForm.value).subscribe(
      error => {
        console.log(error);
      }
    )

  }
}
