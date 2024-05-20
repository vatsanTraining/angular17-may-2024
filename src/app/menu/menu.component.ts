import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Menu } from '../menu';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule,NgFor,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router:Router){

  }

  logout() {


  sessionStorage.removeItem('islogged');
  this.router.navigate(['login'])

}


  handleOut() {

    this.logo='assets/favicon.ico';
}


  menuList:Menu[] =[{menuText:"Home",link:'/header'},
      {menuText:"View Users ",link:"/user"},
      {menuText:"View Tasks",link:"/tasks"},
      {menuText:"Add user",link:'/adduser'},
      {menuText:"Employees",link:'/showemployee'},
      {menuText:"DashBoard",link:'/dashboard'}

    ];
      
    




  logo:string = 'assets/favicon.ico'

  @Input() fromParent:string=''
  @Output() reply = new EventEmitter<string>()

  userName:string = 'ramesh';

  handleHover(){

    this.logo='assets/loan.png'

  }

  sendResponse(){
    this.reply.emit("Yes i will ");
  }
}
