import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.sass']
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  public employeeID;
  public employee;
  public count;
  public  date;

  constructor(private route: ActivatedRoute, private router: Router, private _employeeService: EmployeeService) {
    this._employeeService.getEmployee().subscribe(data => this.employees = data);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.employeeID = id;
      this.getEmployeeByID();
    });
  }
  goPre() {
    let preID = this.employeeID - 1;
    this.router.navigate(['/employee/detail',preID]);
  }

  goNext() {
    let nextID = this.employeeID + 1;
    this.router.navigate(['/employee/detail',nextID]);
  }

  getEmployeeByID(){
    this._employeeService.getEmployeeByID(this.employeeID).subscribe(data => {this.employee = data;});
    this.count = this.employees.length;
  }
}
