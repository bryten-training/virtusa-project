<<<<<<< HEAD
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { VideoComponent } from './video.component';
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VideoComponent } from './video.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { VideoService } from '../video.service';
import { MaterialModule } from 'src/app/material/material.module';
import { MatCardModule } from '@angular/material/card';
>>>>>>> e51e0cb2d8532106c60f0a69ba6858712a961aba

// describe('VideoComponent', () => {
//   let component: VideoComponent;
//   let fixture: ComponentFixture<VideoComponent>;

<<<<<<< HEAD
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ VideoComponent ]
//     })
//     .compileComponents();
//   }));
=======
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, MatSnackBarModule, MatCardModule],
      providers: [VideoService]
    })
    .compileComponents();
  }));
>>>>>>> e51e0cb2d8532106c60f0a69ba6858712a961aba

//   beforeEach(() => {
//     fixture = TestBed.createComponent(VideoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

<<<<<<< HEAD
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
=======
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //service test
  let service: VideoService;
  it('should use VideoService and check response to be not empty', () => {
    service = TestBed.get(VideoService);
    let responseList = service.getVideoList();
    expect(responseList).toBeTruthy;
    expect(responseList.subscribe.length).toBeGreaterThan(0);
  });

  it('VideoService videoCourse array not empty', () => {
    service = TestBed.inject(VideoService);
    let courseName;
    let responseData = service.getCourse(courseName);
    expect(responseData).toBeTruthy;
    expect(responseData.subscribe.length).toBeGreaterThan(0);
  });
});
>>>>>>> e51e0cb2d8532106c60f0a69ba6858712a961aba
