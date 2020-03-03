import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  constructor() { }
  panelOpenState = false;
  angular = false;
  nodeJs = false;
  javascript = false;

  assesmentForm = new FormGroup({
    firstQuestion: new FormControl(''),
    secondQuestion: new FormControl(''),
    thirdQuestion: new FormControl('')
  });

  submitForm() {
    const requestData = this.assesmentForm.value;
    alert(JSON.stringify(requestData));
  }
  onClick(course: string) {
    if (course === 'angular') {
      this.angular = !this.angular;
      this.nodeJs = false;
      this.javascript = false;
    } else if (course === 'javascript') {
      this.nodeJs = false;
      this.angular = false;
      this.javascript = !this.javascript;
    } else if (course === 'nodeJs') {
      this.nodeJs = !this.nodeJs;
      this.javascript = false;
      this.angular = false;
    }
  }
  ngOnInit(): void {
  }

}
