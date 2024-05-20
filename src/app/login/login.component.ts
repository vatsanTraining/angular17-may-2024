import { Component, ViewChild } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild("loginForm") form:any

  currentUser:User = {userName:'',email:''}

  constructor(private router:Router){

  }
  onSubmit(){
    console.log(this.currentUser)

    if(this.currentUser.userName==='india' && this.currentUser.email==="guest@abc.in")
      {
       this.router.navigate(['tasks'])
       sessionStorage.setItem("islogged","true")
      }
  }
  reset() {

    this.form.reset();
}
}
