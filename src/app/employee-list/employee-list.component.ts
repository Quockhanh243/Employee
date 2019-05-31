import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Router} from '@angular/router';
declare var $;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {

  public employee = [];
  constructor(private _employeeService: EmployeeService, private router :Router) {
    this._employeeService.getEmployee().subscribe(data => this.employee = data);
  }
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      processing: true
    };
  }

  onDelete(id){

  }
  getInfo(i: number)
  {

  }
  onSelect(id: any) {
    this.router.navigate(['employee/detail',id]);
  }
}
