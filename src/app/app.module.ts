import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { ArticlesModule } from './articles/articles.module';
import { ReactiveFormsModule } from "@angular/forms";
import {AccountsModule} from "./accounts/accounts.module"

import { AssessmentModule } from './assessment/assessment.module';
import { VideoModule } from './video/video.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AccountsModule,
    ArticlesModule,
    ReactiveFormsModule,
    AccountsModule,
    AssessmentModule,
    VideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
