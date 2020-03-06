import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {
  Assessment,
  AssessmentQuestions,
  Options,
  AssessmentService
} from '../assessment.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-assessment',
  templateUrl: './new-assessment.component.html',
  styleUrls: ['./new-assessment.component.scss']
})
export class NewAssessmentComponent implements OnInit {
  constructor(private formB: FormBuilder,
              private router: Router,
              private assSvc: AssessmentService,
              private _snackBar: MatSnackBar) { }

  Answers = [true, false];
  courses = ['Angular', 'JavaScript', 'NodeJS'];
  questions: AssessmentQuestions[];
  assessmentForm: FormGroup = this.formB.group({
    course: ['', [Validators.required]],
    ques1: ['', [Validators.required]],
    ques1op1: ['', [Validators.required]],
    ques1Ans1: ['', [Validators.required]],
    ques1op2: ['', [Validators.required]],
    ques1Ans2: ['', [Validators.required]],
    ques1op3: ['', [Validators.required]],
    ques1Ans3: ['', [Validators.required]],
    ques1op4: ['', [Validators.required]],
    ques1Ans4: ['', [Validators.required]],

    ques2: ['', [Validators.required]],
    ques2op1: ['', [Validators.required]],
    ques2Ans1: ['', [Validators.required]],
    ques2op2: ['', [Validators.required]],
    ques2Ans2: ['', [Validators.required]],
    ques2op3: ['', [Validators.required]],
    ques2Ans3: ['', [Validators.required]],
    ques2op4: ['', [Validators.required]],
    ques2Ans4: ['', [Validators.required]],

    ques3: ['', [Validators.required]],
    ques3op1: ['', [Validators.required]],
    ques3Ans1: ['', [Validators.required]],
    ques3op2: ['', [Validators.required]],
    ques3Ans2: ['', [Validators.required]],
    ques3op3: ['', [Validators.required]],
    ques3Ans3: ['', [Validators.required]],
    ques3op4: ['', [Validators.required]],
    ques3Ans4: ['', [Validators.required]]
  });
  ngOnInit(): void { }
  dataSubmit() {
    const courseNew = {
      courseName: this.assessmentForm.value.course,
      icon: 'assets/add-article.jpeg',
      courseData: [{
        id: 0,
        q: this.assessmentForm.value.ques1,
        options: [
          {
            opt: this.assessmentForm.value.ques1op1,
            optAns: this.assessmentForm.value.ques1Ans1
          },
          {
            opt: this.assessmentForm.value.ques1op2,
            optAns: this.assessmentForm.value.ques1Ans2
          },
          {
            opt: this.assessmentForm.value.ques1op3,
            optAns: this.assessmentForm.value.ques1Ans3
          },
          {
            opt: this.assessmentForm.value.ques1op4,
            optAns: this.assessmentForm.value.ques1Ans4
          }]
      }, {
        id: 1,
        q: this.assessmentForm.value.ques2,
        options: [
          {
            opt: this.assessmentForm.value.ques2op1,
            optAns: this.assessmentForm.value.ques2Ans1
          },
          {
            opt: this.assessmentForm.value.ques2op2,
            optAns: this.assessmentForm.value.ques2Ans2
          },
          {
            opt: this.assessmentForm.value.ques2op3,
            optAns: this.assessmentForm.value.ques2Ans3
          },
          {
            opt: this.assessmentForm.value.ques2op4,
            optAns: this.assessmentForm.value.ques2Ans4
          }]
      }, {
        id: 2,
        q: this.assessmentForm.value.ques3,
        options: [
          {
            opt: this.assessmentForm.value.ques3op1,
            optAns: this.assessmentForm.value.ques3Ans1
          },
          {
            opt: this.assessmentForm.value.ques3op2,
            optAns: this.assessmentForm.value.ques3Ans2
          },
          {
            opt: this.assessmentForm.value.ques3op3,
            optAns: this.assessmentForm.value.ques3Ans3
          },
          {
            opt: this.assessmentForm.value.ques3op4,
            optAns: this.assessmentForm.value.ques3Ans4
          }]
      }
      ],
    };
    this.assSvc.postCourse(courseNew).subscribe(data => {
      this._snackBar.open('Successfully saved data', 'Ok', {
        duration: 2000,
      });
    });
    setTimeout(() => {
      this.router.navigate(['/assessment']);
    }, 1000);
  }
}
