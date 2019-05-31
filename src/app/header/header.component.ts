import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private _authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  logOut(){
    this._authenticationService.logOut()
    this.router.navigate(['login']);
  }
}
