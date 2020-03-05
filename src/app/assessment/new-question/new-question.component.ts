import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AssessmentQuestions, AssessmentService, Assessment } from '../assessment.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {

  constructor(private formB: FormBuilder,
              private router: Router,
              private assSvc: AssessmentService,
              private _snackBar: MatSnackBar) { }

  Answers = [true, false];
  courses = ['Angular', 'JavaScript', 'NodeJs'];
  courseDt: Assessment[];
  specCourseDt: Assessment;
  courseNewQuestion: AssessmentQuestions;

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
  });
  ngOnInit(): void {
    this.assSvc.getAssessmentList().subscribe(data => {
      this.courseDt = data;
    });
  }
  dataSubmit() {
    this.courseNewQuestion = {
      id: 6,
      q: this.assessmentForm.value.ques1,
      options: [
        {
          id: 1,
          opt: this.assessmentForm.value.ques1op1,
          optAns: this.assessmentForm.value.ques1Ans1
        },
        {
          id: 2,
          opt: this.assessmentForm.value.ques1op2,
          optAns: this.assessmentForm.value.ques1Ans2
        },
        {
          id: 3,
          opt: this.assessmentForm.value.ques1op3,
          optAns: this.assessmentForm.value.ques1Ans3
        },
        {
          id: 4,
          opt: this.assessmentForm.value.ques1op4,
          optAns: this.assessmentForm.value.ques1Ans4
        }]
    };
    this.courseDt.forEach(data => {
      if (data.courseName === this.assessmentForm.value.course) {
        this.specCourseDt = data;
      }
    });
    this.specCourseDt.courseData.push(this.courseNewQuestion);
    this.assSvc.putQuestion(this.specCourseDt, this.courses.indexOf(this.assessmentForm.value.course)).subscribe(questiondata => {
      this._snackBar.open('Successfully saved data', 'Ok', {
        duration: 2000,
      });
    });
    setTimeout(() => {
      this.router.navigate(['/assessment']);
    }, 1000);
  }
}
