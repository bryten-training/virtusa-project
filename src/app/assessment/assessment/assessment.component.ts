import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  submitForm() {
    let requestData = this.assesmentForm.value
    alert(JSON.stringify(requestData))
  }


  assesmentForm = new FormGroup({
    firstQuestion: new FormControl(''),
    secondQuestion: new FormControl(''),
    thirdQuestion: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
