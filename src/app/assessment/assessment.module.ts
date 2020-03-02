import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './assessment/assessment.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AssessmentComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AssessmentModule { }
