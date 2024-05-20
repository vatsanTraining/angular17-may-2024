import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  list:User[]=[]
  constructor(private service:UserService){

    this.list= service.getUsers();
  }

}
