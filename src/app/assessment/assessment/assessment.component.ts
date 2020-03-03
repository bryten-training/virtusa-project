import { Component, OnInit, OnDestroy } from '@angular/core';
import { AssessmentService, Assessment } from '../assessment.service';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  data: Assessment[] = [];
  angular = false;
  nodeJs = false;
  javascript = false;
  displayArr = [];

  constructor(private asSvc: AssessmentService) { }

  ngOnInit(): void {
    this.asSvc.getVideoList().subscribe(res => {
      this.data = res;
      this.data.forEach(a => this.displayArr.push(false));
      console.log(this.displayArr);
    });
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
