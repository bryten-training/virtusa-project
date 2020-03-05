import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AssessmentComponent } from './assessment/assessment.component';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [AssessmentComponent, AssessmentFormComponent, AlertComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class AssessmentModule { }
