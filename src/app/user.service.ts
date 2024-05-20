import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userList:User[] =[];

  constructor() { 
    this.userList= [
      {id:101,userName:"ramesh",email:"ram@abc.com"},
      {id:102,userName:"rajesh",email:"raj@abc.com"}
    ]
  }

  getUsers():User[]{
    return this.userList;
  }


}
