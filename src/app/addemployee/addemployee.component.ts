import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent {

  employeeForm:FormGroup;

   constructor(private service:EmployeeService,private route:Router){

    this.employeeForm=new FormGroup({ 
      id:new FormControl('',Validators.required),
      employeeName:new FormControl('',Validators.required),
      designation:new FormControl('',Validators.required)}
    )
   }


   onSubmit(){

    this.service.addEmployee(this.employeeForm.value).subscribe({
      next: () =>this.route.navigate(['showemployee'])
    })
   }

}
