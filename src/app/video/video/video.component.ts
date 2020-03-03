import { Component, OnInit } from '@angular/core';
import { VideoService, Video } from '../video.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  
  constructor(private videoSvc: VideoService, public sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.videoSvc.getVideoList().subscribe(response => {
      this.videoList = response
    },
    error => {
      alert("Sorry. There was a problem getting data.")
    })
  }

  videoList: Video[] = []
  title: string ;
  displayArr: boolean[] = [];

  // sanitize the url
  safeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  //show videos
  onClick(courseId: number) {
    if (this.displayArr[courseId] === true) {
      this.displayArr = [];
      this.videoList.forEach(a => this.displayArr.push(false));
    } else {
      this.displayArr = [];
      this.videoList.forEach(a => this.displayArr.push(false));
      this.displayArr[courseId] = true;
    }
  }
}
