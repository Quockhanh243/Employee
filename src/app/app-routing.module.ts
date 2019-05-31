import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import {AngularFormComponent} from './angular-form/angular-form.component';
import {EmployeeComponent} from './employee/employee.component';
import {LoginComponent} from './login/login.component';
import { AuthGaurdService} from './auth-gaurd.service';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';
import {DepartmentComponent} from './department/department.component';
import {AddDepartmentComponent} from './add-department/add-department.component';
import {LabourContactComponent} from './labour-contact/labour-contact.component';
import {LabourListComponent} from './labour-list/labour-list.component';
import {EducationComponent} from './education/education.component';
import {EducationListComponent} from './education-list/education-list.component';
import {WorkProcessComponent} from './work-process/work-process.component';
import {WorkProcessListComponent} from './work-process-list/work-process-list.component';
import {AdwardComponent} from './adward/adward.component';
import {DiscliplineComponent} from './disclipline/disclipline.component';
import {SalaryComponent} from './salary/salary.component';

const routes: Routes = [
  {path: '', component: EmployeeComponent, canActivate: [AuthGaurdService]},
  {path: 'department', component: DepartmentComponent,children:[
      {path: 'list', component: DepartmentListComponent},
      {path: 'add', component: AddDepartmentComponent},
      {path: 'detail/:id', component: DepartmentDetailComponent}
    ], canActivate: [AuthGaurdService]},
  {path: 'employee', component: EmployeeComponent,
    children: [
      {path: 'list', component: EmployeeListComponent},
      {path: 'add', component: AddEmployeeComponent},
      {path:'detail/:id', component: EmployeeDetailComponent}],
    canActivate: [AuthGaurdService]},
  {path: 'labour', component: LabourContactComponent, children:[
      {path: 'list', component: LabourListComponent}
    ],canActivate: [AuthGaurdService]},
  {path: 'education', component: EducationComponent, children: [
      {path: 'list', component: EducationListComponent}
    ],canActivate: [AuthGaurdService]},
  {path: 'process', component: WorkProcessComponent, children:[
      {path: 'list', component: WorkProcessListComponent}
    ], canActivate:[AuthGaurdService]},
  {path: 'adward', component: AdwardComponent,canActivate:[AuthGaurdService]},
  {path: 'disclipline', component: DiscliplineComponent,canActivate:[AuthGaurdService]},
  {path: 'salary', component: SalaryComponent,canActivate:[AuthGaurdService]},
  {path: 'form', component: AngularFormComponent, canActivate: [AuthGaurdService]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentListComponent,
  EmployeeComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent,
  AngularFormComponent,
  LoginComponent,
  EmployeeDetailComponent,
  AddEmployeeComponent, AddDepartmentComponent, DepartmentListComponent, DepartmentComponent]
