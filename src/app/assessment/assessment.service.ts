import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private httpClient: HttpClient) {}

  getVideoList(): Observable<Assessment[]> {
        return this.httpClient.get<Assessment[]>('http://localhost:3000/assessment');
    }
}
export class Assessment {
  courseName: string;
  courseId: number;
  courseData: object[];
  icon: string;
}
export class AssessmentQuestions {
  q: string;
  options: Options[];
}

export class Options {
 opt: string;
 optAns: boolean;
}
