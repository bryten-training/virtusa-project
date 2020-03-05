import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AssessmentQuestions, AssessmentService } from '../assessment.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {

  constructor(private formB: FormBuilder, private assSvc: AssessmentService) { }

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
  });
  ngOnInit(): void { }
  dataSubmit() {
    console.log(this.assessmentForm.value);
    const courseNewQuestion = {
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
    };
    console.log(courseNewQuestion);
    // this.assSvc.postCourse(this.assessmentForm.value.course, courseNew);
    // this.assSvc.postCrs(courseNew).subscribe(data => console.log(data));
  }
}
