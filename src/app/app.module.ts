import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentComponent } from './members/student/student.component';
import { ProfessorComponent } from './members/professor/professor.component';
import { EventComponent } from './event/event.component';
import { ProfileComponent } from './members/profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { PostComponent } from './post/post.component';
import {DataTablesModule} from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {TimeAgoPipe} from 'time-ago-pipe';
import {RatingModule} from "ng-starrating";
import { LoginComponent } from './login/login.component';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentComponent,
    ProfessorComponent,
    EventComponent,
    ProfileComponent,
    SignupComponent,
    PostComponent,
    HomeComponent,
    TimeAgoPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RatingModule,
    TabsModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
