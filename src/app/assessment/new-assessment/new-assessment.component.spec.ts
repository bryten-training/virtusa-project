// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
// import { NewAssessmentComponent } from './new-assessment.component';
=======
import { NewAssessmentComponent } from './new-assessment.component';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormControlName } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DebugElement } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> e51e0cb2d8532106c60f0a69ba6858712a961aba

// describe('NewAssessmentComponent', () => {
//   let component: NewAssessmentComponent;
//   let fixture: ComponentFixture<NewAssessmentComponent>;

<<<<<<< HEAD
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ NewAssessmentComponent ]
//     })
//     .compileComponents();
//   }));
=======
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // tslint:disable-next-line: max-line-length
      imports: [FormsModule, RouterTestingModule, MaterialModule, BrowserAnimationsModule, MatSnackBarModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ NewAssessmentComponent ]
    })
    .compileComponents();
  }));
>>>>>>> e51e0cb2d8532106c60f0a69ba6858712a961aba

//   beforeEach(() => {
//     fixture = TestBed.createComponent(NewAssessmentComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

<<<<<<< HEAD
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
=======
  fit('new assessment required', () => {
    const crsEl = fixture.debugElement.nativeElement;
    console.log(crsEl.value);
    expect(crsEl.querySelector('h1').textContent).toContain('Please update assessment here');
  });
});
>>>>>>> e51e0cb2d8532106c60f0a69ba6858712a961aba
