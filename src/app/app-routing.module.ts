import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { ProfileComponent } from './components/employee/profile/profile.component';
import { DesignationComponent } from 'src/app/components/designation/designation.component';
import { DepartmentComponent } from './components/department/department.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
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
    component:ProfileComponent
  },
  {
    path:'designations',
    component:DesignationComponent
  },
  {
    path:'departments',
    component:DepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
