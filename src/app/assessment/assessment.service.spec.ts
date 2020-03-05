import { TestBed, async } from '@angular/core/testing';

import { AssessmentService, Assessment } from './assessment.service';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormControlName } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DebugElement } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AssessmentService', () => {
  let service: AssessmentService;
  // tslint:disable-next-line: prefer-const
  let dataList: Assessment[];
  let dataC: Assessment;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // tslint:disable-next-line: max-line-length
      imports: [FormsModule, RouterTestingModule, MaterialModule, BrowserAnimationsModule, MatSnackBarModule, ReactiveFormsModule, HttpClientTestingModule],
    });
    service = TestBed.inject(AssessmentService);
    service.getAssessmentList().subscribe(data => {
      dataList = data;
    });

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should get assessment list data',async((done: DoneFn) => {
    service.getAssessmentList().subscribe(value => {
      expect(value).toBe(dataList);
      done();
    });
  }));

  // fit('should get assessment list data',async((done: DoneFn) => {
  //   service.getAssessmentList().subscribe(value => {
  //     expect(value).toBe(dataList);
  //     done();
  //   });
  // }));
  
});
