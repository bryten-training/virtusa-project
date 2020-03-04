import { Component, OnInit } from '@angular/core';
import { VideoService, Video, VideoDisplay } from '../video.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  
  constructor(private videoSvc: VideoService, private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.videoSvc.getVideoList().subscribe(response => {
      this.videoList = response;
    },
    error => {
      alert("Sorry. There was a problem getting data.")
    })
  }
  
  videoList: Video[] = [];
  videoData: VideoDisplay[] = [];
  displayArr: boolean[] = [];
  selectedFile: File;
  videoDataForPost;
  theName;
  theCourse;
  selectedCourse;
 
  
  uploadForm = new FormGroup ({
    theName: new FormControl('', Validators.required),
    theCourse: new FormControl('', Validators.required)
  })
  
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

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }

  onUpload() {
    this.selectedCourse = this.uploadForm.controls.theCourse.value;
    console.log("selectedCourse "+this.selectedCourse);
    if(this.selectedCourse == 0) {
      this.videoDataForPost = this.videoList[0]
      console.log(this.videoDataForPost)
    } else if(this.selectedCourse == 1) {
      this.videoDataForPost = this.videoList[1]
    } else if (this.selectedCourse == 2) {
      this.videoDataForPost = this.videoList[2]
    }
    console.log(event);
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

    let videoData = this.videoDataForPost.videoData;
    let len = videoData.length;
    console.log("videoData length before " +len)
    console.log("videoData "+videoData)

    let newItem = new VideoDisplay;
    newItem.id = videoData.length + 1;
    newItem.title = this.selectedFile.name;
    newItem.url = "http://test";

    console.log("newItem "+newItem)
    videoData.push(newItem);
    len = videoData.length;
    console.log("videoData length after " +len)

    console.log("videoList " +this.videoList)

    this.httpClient.put(`/api/video/${this.selectedCourse}`, this.videoDataForPost).subscribe((data) => {
      console.log("after::", data);
    })

  }

}
