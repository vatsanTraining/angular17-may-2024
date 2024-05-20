import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  getTasks():Observable<Tasks[]>{

    return this.http.get<Tasks[]>("http://localhost:3000/tasks")
  }

  

}
