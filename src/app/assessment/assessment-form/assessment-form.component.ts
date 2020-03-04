import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AssessmentService , AssessmentQuestions, Assessment } from '../assessment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss']
})
export class AssessmentFormComponent implements OnInit {

  // @Input() courseData: AssessmentQuestions;
  courseNm: Assessment;
  courseData: AssessmentQuestions[];
  courseNameStr: string;
  usrAns: boolean[];
  score: number = 0;

  assesmentForm = new FormGroup({
    first: new FormControl(''),
    second: new FormControl(''),
    third: new FormControl(''),
    fourth: new FormControl(''),
    fifth: new FormControl(''),
  });

  ans = ['first', 'second', 'third', 'fourth', 'fifth'];

  constructor(private Svc: AssessmentService,
              private router: Router) { }

  ngOnInit(): void {
    this.router.routerState.root.queryParams.subscribe(params => {
      this.courseNameStr = params.course;
      this.Svc.getCourse(this.courseNameStr).subscribe(coursD => {
        if(coursD[0] !== undefined) {
          console.log(coursD);
          this.courseData = coursD[0].courseData;
          this.courseNm = coursD[0];
        }

        // console.log(this.assesmentForm.value);
        // console.log(this.ans);
        // this.userAns = [];
        // this.courseData.forEach(answer => {
        //   this.userAns.push(false);
        // });
      });
    });
  }

  navBack() {
    this.router.navigate(['assessment']);
  }

  submitForm() {
    const requestData = this.assesmentForm.value;
    // console.log(JSON.stringify(requestData));
    // this.userAns.forEach( val => {
    //   if (val === true) {
    //     this.score += 1;
    //   }
    // });
  }
  
}
