import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { ProfileComponent } from './components/employee/profile/profile.component';
import { DesignationComponent } from 'src/app/components/designation/designation.component';
import { DepartmentComponent } from './components/department/department.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { SubDepartmentsComponent } from './components/sub-departments/sub-departments.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'forgotpass',
    component:ForgotpassComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'myprofile',
    component:ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'designations',
    component:DesignationComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'departments',
    component:DepartmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'sub-departments',
    component:SubDepartmentsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
