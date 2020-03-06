// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
// import { AssessmentFormComponent } from './assessment-form.component';
=======
import { AssessmentFormComponent } from './assessment-form.component';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormControlName } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DebugElement } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> e51e0cb2d8532106c60f0a69ba6858712a961aba

// describe('AssessmentFormComponent', () => {
//   let component: AssessmentFormComponent;
//   let fixture: ComponentFixture<AssessmentFormComponent>;

<<<<<<< HEAD
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AssessmentFormComponent ]
//     })
//     .compileComponents();
//   }));
=======
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // tslint:disable-next-line: max-line-length
      imports: [FormsModule, RouterTestingModule, MaterialModule, BrowserAnimationsModule, MatSnackBarModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ AssessmentFormComponent ]
    })
    .compileComponents();
  }));
>>>>>>> e51e0cb2d8532106c60f0a69ba6858712a961aba

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AssessmentFormComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

<<<<<<< HEAD
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
=======
  fit('form required', () => {
    const crsEl = fixture.debugElement.nativeElement;
    console.log(crsEl.value);
    expect(crsEl.querySelector('h1').textContent).toContain('Sorry you hvae failed I am sorry try again later');
  });
});
>>>>>>> e51e0cb2d8532106c60f0a69ba6858712a961aba
