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

  postCourse(courseNm, coursedt) {
    console.log(coursedt);
    return this.httpClient.put('api/assessment/' + courseNm, coursedt);
  }
  postCrs(courseNew) {
    return this.httpClient.put('/api/assessment/Angular' , courseNew);
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
  id: number;
 opt: string;
 optAns: boolean;
}
