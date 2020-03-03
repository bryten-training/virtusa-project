import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ]
})
export class VideoModule { }
