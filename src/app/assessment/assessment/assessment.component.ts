import { Component, OnInit } from '@angular/core';
import { AssessmentService, Assessment } from '../assessment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  data: Assessment[] = [];
  displayArr = [];

  constructor(private asSvc: AssessmentService, private router: Router ) { }

  ngOnInit(): void {
    this.asSvc.getAssessmentList().subscribe(res => {
      this.data = res;
      this.data.forEach(a => this.displayArr.push(false));
    },
    error => {
      alert('Sorry. There was a problem course data.');
    });
  }
  nav(courseName) {
    this.router.navigate(['course'], {queryParams:
      {
      course: courseName,
    }});
  }
  navNew() {
    this.router.navigate(['NewAssessment']);
  }

  onClick(courseId: number) {
    if (this.displayArr[courseId] === true) {
      this.displayArr = [];
      this.data.forEach(a => this.displayArr.push(false));
    } else {
      this.displayArr = [];
      this.data.forEach(a => this.displayArr.push(false));
      this.displayArr[courseId] = true;
    }
  }
}
