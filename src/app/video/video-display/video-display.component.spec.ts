<<<<<<< HEAD
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { VideoDisplayComponent } from './video-display.component';
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VideoDisplayComponent } from './video-display.component';
import { RouterTestingModule } from '@angular/router/testing';
>>>>>>> e51e0cb2d8532106c60f0a69ba6858712a961aba

// describe('VideoDisplayComponent', () => {
//   let component: VideoDisplayComponent;
//   let fixture: ComponentFixture<VideoDisplayComponent>;

<<<<<<< HEAD
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ VideoDisplayComponent ]
//     })
//     .compileComponents();
//   }));
=======
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDisplayComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));
>>>>>>> e51e0cb2d8532106c60f0a69ba6858712a961aba

//   beforeEach(() => {
//     fixture = TestBed.createComponent(VideoDisplayComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
