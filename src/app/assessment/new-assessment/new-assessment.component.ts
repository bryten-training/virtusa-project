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

@Component({
  selector: 'app-new-assessment',
  templateUrl: './new-assessment.component.html',
  styleUrls: ['./new-assessment.component.scss']
})
export class NewAssessmentComponent implements OnInit {
  constructor(private formB: FormBuilder, private assSvc: AssessmentService ) { }

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
    console.log(this.assessmentForm.value);

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
    console.log(courseNew);
    // this.assSvc.postCourse(this.assessmentForm.value.course, courseNew);
    // this.assSvc.postCrs(courseNew).subscribe(data => console.log(data));
  }
}
//   let courseNew: Assessment ;
    //   let courseDataNew: AssessmentQuestions ;
    //   let courseoptionsNew: Options;

    //   for (let i = 1; i < 4; i++) {
    //     courseDataNew.id = i - 1;
    //     courseDataNew.q = this.assessmentForm.value['ques' + i];
    //     for (let l = 1; l < 5; l++) {
    //       if (courseoptionsNew === undefined) {
    //         courseoptionsNew.id = l - 1;
    //         courseoptionsNew.opt = this.assessmentForm.value[
    //           'ques' + i + 'op' + l
    //         ];
    //         courseoptionsNew.optAns = this.assessmentForm.value[
    //           'ques' + i + 'Ans' + l
    //         ];
    //         courseDataNew.options.push(courseoptionsNew);
    //       }
    //     }
    //     courseNew.courseData.push(courseDataNew);
    //   }
    //   courseNew.courseName = this.assessmentForm.value.course;
    //   courseNew.icon = '';
    //   courseNew.id = 4;
