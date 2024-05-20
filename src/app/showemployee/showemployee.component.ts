import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Serializer } from '@angular/compiler';
import { Router } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-showemployee',
  standalone: true,
  imports: [FilterPipe,FormsModule],
  templateUrl: './showemployee.component.html',
  styleUrl: './showemployee.component.css'
})
export class ShowemployeeComponent {

  employeeList: Employee[];
  srchValue:string =''

  constructor(private service:EmployeeService,private route:Router){
    console.log('Employee Service Called --- Step --->1')

    this.employeeList=[]
  }
  ngOnInit(){
    console.log('Employee Init method called Step --->2')

    this.service.getAllemployees().subscribe({
      next:(data) => this.employeeList = data,
      error: err =>console.log(err)

    })
  }

  add() {

    this.route.navigate(['addemployee'])
  }
  
  edit(obj:Employee):void{

    this.route.navigate(['editemployee',obj.id])
  }
  remove(obj:Employee):void{

    this.service.deleteEmployee(obj.id).subscribe({
      next:(data)=>{
         let idxpos = this.employeeList.indexOf(data);
         this.employeeList.splice(idxpos,1)
      }
    })
  }
}
