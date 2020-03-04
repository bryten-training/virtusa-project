import { Component, OnInit } from '@angular/core';
import { VideoService, Video, VideoDisplay } from '../video.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  
  constructor(private videoSvc: VideoService, private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.videoSvc.getVideoList().subscribe(response => {
      this.videoList = response
      this.videoDataForAngular = this.videoList[0]
    },
    error => {
      alert("Sorry. There was a problem getting data.")
    })
  }
  
  videoList: Video[] = [];
  videoData: VideoDisplay[] = [];
  title: string ;
  displayArr: boolean[] = [];
  fileData: File = null;
  videoDataArray
  videoDataForAngular
  
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

  selectedFile: File

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }

  onUpload() {
    // upload code goes here
    // const uploadData = new FormData();
    // uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    
    // let test = new VideoDisplay;
    // test.id = this.videoData.length;
    // test.title = this.selectedFile.name;
    // test.url = "";

    // console.log("before" +JSON.stringify(this.videoList[0]));
    // this.videoDataArray = this.videoList[0].videoData;
    // this.videoDataArray.push(test);
    // console.log("after" +JSON.stringify(this.videoDataArray));
    
    // this.httpClient.put(`/api/video/0`, this.videoDataArray).subscribe((data) => {
    //   console.log("after::", data);
    // })

    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

    let videoData = this.videoDataForAngular.videoData;
    let len = videoData.length;
    console.log("videoData length before " +len)
    console.log("videoData "+videoData)

    let newItem = new VideoDisplay;
    newItem.id = videoData.length
    newItem.title = this.selectedFile.name
    newItem.url = "http://test"

    console.log("newItem "+newItem)
    videoData.push(newItem)
    len = videoData.length
    console.log("videoData length after " +len)

    this.videoList[0] = this.videoDataForAngular

    console.log("videoList " +this.videoList)

    this.httpClient.put(`/api/video/0`, this.videoDataForAngular).subscribe((data) => {
      console.log("after::", data);
    })

  }

}
