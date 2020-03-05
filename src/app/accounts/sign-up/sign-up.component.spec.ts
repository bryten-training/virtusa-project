import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { SignUpComponent } from './sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { AccountsService } from '../services/accounts.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

fdescribe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let signupEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,

      ],
      providers: [AccountsService]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should compile', () => {
    expect(component).toBeTruthy();
  });

  fit('form invalid when empty', () => {
    expect(component.signupForm.valid).toBeFalsy();
  });

  fit('email field pattern validity', () => {
    let errors = {};
    let email = component.signupForm.controls['email'];
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  fit('submitting a signupsignupForm registers a user', () => {
    expect(component.signupForm.valid).toBeFalsy();
    component.signupForm.controls['userName'].setValue("rahim123");
    component.signupForm.controls['passWord'].setValue("pass");
    component.signupForm.controls['email'].setValue("test@test.com");
    component.signupForm.controls['userType'].setValue("content provider");
    component.signupForm.controls['firstName'].setValue("rahim");
    component.signupForm.controls['lastName'].setValue("mechtemel");
    expect(component.signupForm.valid).toBeTruthy();
    // Trigger the register function
    component.onRegister();
  });

  fit('hasError is true', ()=>{
    component.hasErrors = true;
    expect(component.styleMessage().color).toBe('#ff0000');
  });

  fit('hasError is false', ()=>{
    component.hasErrors = false;
    expect(component.styleMessage().color).toBe('#008000');
  });

});
