import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InstructorComponent } from './instructor/instructor.component';
import {StudentComponent } from './student/student.component';
import {AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'instructor' ,  component: InstructorComponent },
  {path:'student' ,  component: StudentComponent},
  {path:'admin' ,  component: AdminDashboardComponent},
  {path:'login' ,  component: LoginComponent},
  {path:'' , redirectTo:'instructor',pathMatch:'full'},
  {path:'**' ,  component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
