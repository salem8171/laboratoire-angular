import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentComponent} from "./members/student/student.component";
import {ProfessorComponent} from "./members/professor/professor.component";
import {EventComponent} from "./event/event.component";
import {ProfileComponent} from "./members/profile/profile.component";
import {PostComponent} from "./post/post.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'student', component: StudentComponent},
  {path: 'professor', component: ProfessorComponent},
  {path: 'post', component: PostComponent},
  {path: 'event', component: EventComponent},
  {path: 'profile/:id', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
