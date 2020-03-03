import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  router: Router;
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

  constructor(private accountsSrv: AccountsService) { 
    this.accountsSrv.getAllUsers().subscribe(res=>{
      this.lastId = res.length-1; 
      console.log(res);
      
    })
  }

  userTypes = ["admin", "content provider", "default"];

  onSubmit() {
    this.lastId += 1;
    this.user = this.signupForm.value;
    this.user["id"] = this.lastId;
    console.log(this.user);
    
   this.accountsSrv.register(this.signupForm.value).pipe(first())
   .subscribe(
       data => {
           this.router.navigate(['/assessment']);
       },
       error => {
         alert("User already exists");
       }
   );
    
  }
}
