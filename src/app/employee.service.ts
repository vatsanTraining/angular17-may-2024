import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


  baseURL = 'http://localhost:3000/employees'

  getAllemployees():Observable<Employee[]>{

    return this.http.get<Employee[]>(this.baseURL)

  }
  findEmployeeById(id :string):Observable<Employee>{
    return this.http.get<Employee>(this.baseURL+'/'+id)
  }


  addEmployee(obj:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.baseURL,obj);
  }

  deleteEmployee(id :number):Observable<Employee>{
    return this.http.delete<Employee>(this.baseURL+'/'+id)
  }

  updateEmployee(obj :Employee):Observable<Employee>{
    return this.http.put<Employee>(this.baseURL+'/'+obj.id,obj)
  }

}
