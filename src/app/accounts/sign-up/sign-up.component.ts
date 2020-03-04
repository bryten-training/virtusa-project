import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { User } from '../models/user.model';
import { AccountsService } from '../services/accounts.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  userTypes: string[] = ["content provider", "default"];
  hasErrors: boolean;
  message: string;
  user: User;

  signupForm = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    passWord: new FormControl("", [Validators.required]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    userType: new FormControl("", [Validators.required])
  });

  constructor(private accountsSrv: AccountsService, private router: Router) {}

  wasEmailUsed: boolean = false;
  onSubmit() {
    this.wasEmailUsed = false;
    if (this.signupForm.valid) {
      this.user = this.signupForm.value;
      // check for dublicates
      this.accountsSrv.getUser(this.user.email).subscribe(data => {
        if (!data[0]) {
          this.accountsSrv.register(this.signupForm.value).pipe(first())
            .subscribe(
              data => {
                console.log(data);

                this.router.navigate(['/logIn']);
              }
            )
        }else{
          this.wasEmailUsed = true;
        }

      })

    }
  }
}
