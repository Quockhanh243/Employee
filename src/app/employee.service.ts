import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IEmployee} from './employee';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private _url = "http://localhost:8080/api/nhanvien/";
  constructor(private http: HttpClient) { }
  getEmployee(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url+'danhsach');
  }

  getEmployeeByID(id: number):Observable<IEmployee>{
    return this.http.get<IEmployee>(`${this._url}`+`detail/${id}`);
  }
}
