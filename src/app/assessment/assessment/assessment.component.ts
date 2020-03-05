import { Component, OnInit } from '@angular/core';
import { AssessmentService, Assessment } from '../assessment.service';
import { Router } from '@angular/router';
import { User } from 'src/app/accounts/models/user.model';
import { AccountsService } from 'src/app/accounts/services/accounts.service';
import { Auth } from 'src/app/accounts/models/auth.model';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  data: Assessment[] = [];
  displayArr = [];
  currentUser: User;
  constructor(private asSvc: AssessmentService, private router: Router, private accountsService: AccountsService ) { }

  ngOnInit(): void {
    this.asSvc.getAssessmentList().subscribe(res => {
      this.data = res;
      this.data.forEach(a => this.displayArr.push(false));
    },
    error => {
      alert('Sorry. There was a problem course data.');
    });
    this.accountsService.getBehaviorSubject().subscribe((auth: Auth) => {
      // print out user info
      //console.log('Assessment Component User Info: ' + JSON.stringify(auth.currentUser, null, 2));
      // set currentUser for your component (if needed)
      this.currentUser = auth.currentUser;
    });
  }
  nav(courseName) {
    this.router.navigate(['course'], {queryParams:
      {
      course: courseName,
    }});
  }
  navNew() {
    this.router.navigate(['newAssessment']);
  }
  navNewQues() {
    this.router.navigate(['newQuestion']);
  }

  onClick(courseId: number) {
    if (this.displayArr[courseId] === true) {
      this.displayArr = [];
      this.data.forEach(a => this.displayArr.push(false));
    } else {
      this.displayArr = [];
      this.data.forEach(a => this.displayArr.push(false));
      this.displayArr[courseId] = true;
    }
  }
}
