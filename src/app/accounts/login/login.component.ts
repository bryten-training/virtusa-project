import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  isUserNameValid: boolean;
  isEmailValid: boolean;
  isPassWordValid: boolean;
  hasErrors: boolean;

  constructor() { }

  ngOnInit(): void {
    this.instantiateMyForm();
  }

  instantiateMyForm() {
    this.myForm = new FormGroup({
      userName: new FormControl(undefined, [Validators.required]),
      email: new FormControl(undefined, [Validators.required]),
      passWord: new FormControl(undefined, [Validators.required])
    })
  }

  onLogIn() {
    // console.log(this.myForm);
    if (this.myForm.controls.userName.valid) {
      this.isUserNameValid = true;
    } else {
      this.isUserNameValid = false;
    }

    if (this.myForm.controls.email.valid) {
      this.isEmailValid = true;
    } else {
      this.isEmailValid = false;
    }

    if (this.myForm.controls.passWord.valid) {
      this.isPassWordValid = true;
    } else {
      this.isPassWordValid = false;
    }

    if (this.myForm.valid) {
      this.hasErrors = false;
    } else {
      this.hasErrors = true;
    }
  }
}
