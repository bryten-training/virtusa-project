
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment/assessment.component';
import { VideoComponent } from './video/video/video.component';
import { SignUpComponent } from './accounts/sign-up/sign-up.component';
import { FlashCardComponent } from './flash-cards/flash-card/flash-card.component';
import { LoginComponent } from './accounts/login/login.component';
import { AddcardComponent } from './flash-cards/addcard/addcard.component';
import { FlashCardlistComponent } from './flash-cards/flash-cardlist/flash-cardlist.component';

const routes: Routes = [
  { path: "", redirectTo: "logIn", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'logIn', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'cards', component: FlashCardlistComponent },
  {
    path: 'artcls',
    loadChildren: () =>
      import("./articles/articles.module").then(m => m.ArticlesModule)
  },
  { path: 'assessment', component: AssessmentComponent },
  { path: 'video', component: VideoComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'addcard', component: AddcardComponent},
  { path: 'card', component: FlashCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
