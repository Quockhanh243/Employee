import { Component, OnInit } from '@angular/core';
import { DepartmentListService } from '../department-list.service';
import {Router} from '@angular/router';
import {IDepartment} from '../department';
declare var $;
@Component({
  selector: 'app-department',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.sass']
})
export class DepartmentListComponent implements OnInit {
  public department =[];

  constructor(private _departmentService: DepartmentListService, private router: Router) {
    this._departmentService.getDepartment().subscribe(data => this.department = data);
  }

  ngOnInit() {
    document.body.className = 'content2';
    $(() => {
      $('#example2').DataTable({
        'paging'      : true,
        'lengthChange': false,
        'searching'   : false,
        'ordering'    : true,
        'info'        : true,
        'autoWidth'   : false
      })
    })
    this.reLoadData();
  }

  onSelect(i){
    this.router.navigate(['department/detail',i.id]);
  }

  onDelete(i: IDepartment) {
    this._departmentService.delDepartment(i.id).subscribe(
      data => {
        console.log(data);
        this.reLoadData();
      },error => console.log(error)
    );
  }

  reLoadData(){
    this._departmentService.getDepartment().subscribe(data => this.department = data);
  }
}
