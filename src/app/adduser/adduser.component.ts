import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,JsonPipe],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {

  userForm:FormGroup;
  
  constructor(private http:HttpClient){

    this.userForm = new FormGroup(
      {
     email: new FormControl(),
     userName: new FormControl(),
     id: new FormControl() 
 
      }); 
   }
  message:string =''
   onSubmit(){
     console.log(this.userForm.value)

     let userToadd = this.userForm.value;
     this.http.post("http://localhost:3000/users",userToadd).subscribe(data => this.message="added");
   }
}
