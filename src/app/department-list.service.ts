import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDepartment } from './department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentListService {
  getDepartmentById(departmentID: any): any {
    throw new Error("Method not implemented.");
  }
  private _url = "http://localhost:8080/api/phongban/";
  constructor(private http: HttpClient) { }
  getDepartment():Observable<IDepartment[]>{
    return this.http.get<IDepartment[]>(this._url+'danhsach');
  }

  delDepartment(id: number):Observable<any>{
    return this.http.get(`${this._url+'xoa'}/${id}`,{responseType: 'text'});
  }

  createDepartment(department: IDepartment):Observable<IDepartment>{
    return this.http.post<IDepartment>(`${this._url}`+`themmoi`,department);
  }
  getADepartment(id: number):Observable<IDepartment>{
    const url = `${this._url}/${id}`
    console.log(id);
    return this.http.get<IDepartment>(url);
  }
}
