import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlescommentsComponent } from './articlescomments.component';

describe('ArticlescommentsComponent', () => {
  let component: ArticlescommentsComponent;
  let fixture: ComponentFixture<ArticlescommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlescommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlescommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
