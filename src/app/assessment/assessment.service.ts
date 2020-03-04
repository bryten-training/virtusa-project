import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private httpClient: HttpClient) {}

  getAssessmentList(): Observable<Assessment[]> {
        return this.httpClient.get<Assessment[]>('api/assessment');
    }

  getCourse(courseNm): Observable<Assessment> {
      return this.httpClient.get<Assessment>('api/assessment?courseName=' + courseNm);
  }
}



export class Assessment {
  courseName: string;
  id: number;
  courseData: AssessmentQuestions[];
  icon: string;
}

export class AssessmentQuestions {
  id: number;
  q: string;
  options: Options[];
}

export class Options {
 opt: string;
 optAns: boolean;
}
