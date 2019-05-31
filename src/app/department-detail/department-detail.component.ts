import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { DepartmentListService } from '../department-list.service';
import { getElementDepthCount } from '@angular/core/src/render3/state';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.sass']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentID;
  public Department = [];
  public aDepartment;
  constructor(private route: ActivatedRoute, private router: Router, private _departmentService: DepartmentListService) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentID = id;
    this._departmentService.getDepartment().subscribe(data => this.Department = data);
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentID = id;
    });
    this.getDepartmentByID();
  }
  goPre(){
    let preID = this.departmentID -1;
    this.router.navigate(['/department/detail',preID]);
  }

  goNext(){
    let nextID = this.departmentID +1;
    this.router.navigate(['/department/detail',nextID]);
  }

  getDepartmentByID(){
    this._departmentService.getDepartmentById(this.departmentID).subscribe(data => {this.aDepartment = data;});
  }
  
}
