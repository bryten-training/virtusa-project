
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment/assessment.component';
import { VideoComponent } from './video/video/video.component';
import { SignUpComponent } from './accounts/sign-up/sign-up.component';
import { LoginComponent } from './accounts/login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "logIn", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'logIn', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  {
    path: "artcls",
    loadChildren: () =>
      import("./articles/articles.module").then(m => m.ArticlesModule)
  },
  { path: 'assessment', component: AssessmentComponent },
  { path: 'video', component: VideoComponent },
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
