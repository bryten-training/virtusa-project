import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { AssessmentQuestions } from '../assessment.service';


@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss']
})
export class AssessmentFormComponent implements OnInit {

  @Input() courseData: AssessmentQuestions;

  assesmentForm = new FormGroup({
    firstQuestion: new FormControl(''),
    secondQuestion: new FormControl(''),
    thirdQuestion: new FormControl('')
  });

  submitForm() {
    const requestData = this.assesmentForm.value;
    alert(JSON.stringify(requestData));
  }

  constructor() { }

  ngOnInit(): void {
    // console.log(this.courseData[0].options[0].opt);
  }

}
