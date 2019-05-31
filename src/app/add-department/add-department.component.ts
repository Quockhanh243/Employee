import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DepartmentListService} from '../department-list.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.sass']
})
export class AddDepartmentComponent implements OnInit {

  constructor(private _fb: FormBuilder, private _departmentService: DepartmentListService) { }

  addDepartmentForm = this._fb.group(
    {
      tenPB: [''],
      sdt: [''],
      diaChi: ['']
    }
  )
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.addDepartmentForm.value);
    this._departmentService.createDepartment(this.addDepartmentForm.value).subscribe(
      response => console.log('Success',response),
      error => console.error('error', error)
    );
  }
}
