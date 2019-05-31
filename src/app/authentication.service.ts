import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authentication(userName, passWord) {
    if (userName === 'admin' && passWord === 'admin') {
      sessionStorage.setItem('userName', userName)
      return true;
    } else {
      return false;
    }
  }

  loggedIn() {
    let user = sessionStorage.getItem('userName')
    console.log(!(user === null))
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('userName');
  }
}
