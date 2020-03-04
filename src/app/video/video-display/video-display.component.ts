import { Component, OnInit, Input } from '@angular/core';
import { VideoDisplay } from '../video.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.scss']
})
export class VideoDisplayComponent implements OnInit {

  @Input() videoData: VideoDisplay;
  
  constructor(public sanitizer: DomSanitizer, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  // sanitize the url
  safeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
