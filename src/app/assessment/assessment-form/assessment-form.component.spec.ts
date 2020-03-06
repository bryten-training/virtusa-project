// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentFormComponent } from './assessment-form.component';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormControlName } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DebugElement } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AssessmentFormComponent', () => {
  let component: AssessmentFormComponent;
  let fixture: ComponentFixture<AssessmentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // tslint:disable-next-line: max-line-length
      imports: [FormsModule, RouterTestingModule, MaterialModule, BrowserAnimationsModule, MatSnackBarModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ AssessmentFormComponent ]
    })
    .compileComponents();
  }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AssessmentFormComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

  fit('form required', () => {
    const crsEl = fixture.debugElement.nativeElement;
    console.log(crsEl.value);
    expect(crsEl.querySelector('h1').textContent).toContain('Sorry you hvae failed I am sorry try again later');
  });
});
