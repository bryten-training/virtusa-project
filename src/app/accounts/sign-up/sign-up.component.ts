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

  lastId = 0;
  user: User = new User();

  signupForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    userType: new FormControl("", [Validators.required])
  });

  constructor(private registerService: RegisterService, private router: Router) {
    this.registerService.getAllUsers().subscribe(res => {
      this.lastId = res.length - 1;
      console.log(res);
    });
    console.log("User: " + this.registerService.loggedInUser);


  }

  userTypes = ["content provider", "default"];

  onSubmit() {
    this.lastId += 1;
    this.user = this.signupForm.value;
    this.user["id"] = this.lastId;

    this.registerService.register(this.signupForm.value).subscribe(
      error => {
        console.log(error);

      }
    )

  }
}
