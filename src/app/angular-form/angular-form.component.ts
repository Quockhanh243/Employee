import { Component, OnInit } from '@angular/core';
import {User} from '../user'

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.sass']
})
export class AngularFormComponent implements OnInit {
  public job = ['Học sinh', 'Sinh viên', 'Công chức - Viên chức'];
  public sex = ['Nam', 'Nữ'];
  public user = new User('','',0,'','',false);
  public error = true;
  public error2;
  constructor() { }

  ngOnInit() {
  }

  select(value){
    if(value == 'default'){
      this.error = true;
    }else{
      this.error = false;
    }
    console.log(value);
  }

}
