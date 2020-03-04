
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment/assessment.component';
import { VideoComponent } from './video/video/video.component';
import { SignUpComponent } from './accounts/sign-up/sign-up.component';
import { FlashCardComponent } from './flash-cards/flash-card/flash-card.component';
import { AuthGuardService } from './accounts/services/auth-guard.service';
import { AlreadyAuthService } from './accounts/services/already-auth.service';
import { LoginComponent } from './accounts/login/login.component';
import { AddcardComponent } from './flash-cards/addcard/addcard.component';
import { FlashCardlistComponent } from './flash-cards/flash-cardlist/flash-cardlist.component';

const routes: Routes = [


  { path: "", redirectTo: 'logIn', pathMatch: 'full', canActivate: [AlreadyAuthService] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'logIn', component: LoginComponent, canActivate: [AlreadyAuthService] },
  { path: 'signUp', component: SignUpComponent, canActivate: [AlreadyAuthService] },
  { path: "crdlist/:id", component: FlashCardlistComponent },
   { path: 'cards', component: FlashCardlistComponent },
  {
    path: 'articles',
    loadChildren: () =>
      import("./articles/articles.module").then(m => m.ArticlesModule)
  },
  { path: 'assessment', component: AssessmentComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'addcard', component: AddcardComponent},
  { path: 'card', component: FlashCardComponent},
  { path: 'video', component: VideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
