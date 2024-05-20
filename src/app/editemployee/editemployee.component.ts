import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editemployee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editemployee.component.html',
  styleUrl: './editemployee.component.css'
})
export class EditemployeeComponent {

  onSubmit() {

    this.service.updateEmployee(this.employeeToEdit).subscribe({
      next: ()=> this.route.navigate(['showemployee'])
    })
}

  employeeToEdit:Employee
  id:string =''

  constructor(private service:EmployeeService,private activeRoute:ActivatedRoute,private route:Router){

    this.employeeToEdit={id:0,employeeName:'',designation:''}
    this.id = activeRoute.snapshot.params['id']
  }


  ngOnInit(){

    this.service.findEmployeeById(this.id).subscribe({
      next: data => this.employeeToEdit = data
    })
  }
}
