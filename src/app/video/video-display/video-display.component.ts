import { Component, OnInit, Input } from '@angular/core';
import { VideoDisplay, VideoService } from '../video.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.scss']
})
export class VideoDisplayComponent implements OnInit {
  courseNameStr: any;
  videoData: any;
  courseNm: any;

  //@Input() videoData: VideoDisplay;
  
  constructor(private videoSvc: VideoService,
              public sanitizer: DomSanitizer, 
              private httpClient: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.router.routerState.root.queryParams.subscribe(params => {
      this.courseNameStr = params.course;
      this.videoSvc.getCourse(this.courseNameStr).subscribe(coursD => {
        if(coursD[0] !== undefined) {
          console.log(coursD);
          this.videoData = coursD[0].videoData;
          this.courseNm = coursD[0];
        }
      });
    });
  }

  // sanitize the url
  safeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // nav back
  navBack() {
    this.router.navigate(['video']);
  }

}
