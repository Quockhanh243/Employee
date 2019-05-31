import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _authenticationService: AuthenticationService) { }
  userName = '';
  passWord = '';
  invalidLogin = false;
  ngOnInit() {
  }

  checkLogin() {
    if(this._authenticationService.authentication(this.userName, this.passWord)) {
      this.router.navigate(['']);
      this.invalidLogin = false;
      console.log(this.userName);
    }else {
      this.invalidLogin = true;
    }
  }
}
