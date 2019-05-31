import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {EmployeeService} from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DepartmentListService} from './department-list.service';
import {AuthenticationService} from './authentication.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentComponent } from './department/department.component';
import { LabourContactComponent } from './labour-contact/labour-contact.component';
import { LabourListComponent } from './labour-list/labour-list.component';
import { EducationComponent } from './education/education.component';
import { EducationListComponent } from './education-list/education-list.component';
import { WorkProcessComponent } from './work-process/work-process.component';
import { WorkProcessListComponent } from './work-process-list/work-process-list.component';
import {AccordionModule} from 'primeng/accordion';
import { ContextMenuModule, ContextMenu, MenuItem, MenuModule } from 'primeng/primeng';
import { AdwardComponent } from './adward/adward.component';
import { DiscliplineComponent } from './disclipline/disclipline.component';
import { SalaryComponent } from './salary/salary.component';
import { FooterComponent } from './footer/footer.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponent,
    AddDepartmentComponent,
    DepartmentComponent,
    LabourContactComponent,
    LabourListComponent,
    EducationComponent,
    EducationListComponent,
    WorkProcessComponent,
    WorkProcessListComponent,
    AdwardComponent,
    DiscliplineComponent,
    SalaryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    AccordionModule,
    ContextMenuModule,
    MenuModule,
    DataTablesModule,
  ],
  providers: [EmployeeService, DepartmentListService, AuthenticationService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
