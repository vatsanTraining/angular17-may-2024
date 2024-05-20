import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';
import { NgFor, UpperCasePipe } from '@angular/common';
import { Tasks } from '../tasks';
import { catchError, forkJoin } from 'rxjs';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor,UpperCasePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  data: Tasks[]=[];

  constructor(private service :TasksService){}

       ngOnInit(){
        //this.preAngular17(); 
        this.angular17();
       }
       preAngular17(){

        this.service.getTasks().subscribe(data =>  this.data = data);

       }
       angular17(){
      

          this.service.getTasks().subscribe({
            next: data => this.data = data,
            error: error => console.log(error),
            complete: () => console.log('finished receipt')
          });

       }
          
        
       }
            
  

