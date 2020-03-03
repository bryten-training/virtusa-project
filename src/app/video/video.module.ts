import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class VideoModule { }
