import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { DatePipe, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent,NgStyle,NgClass,DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  majHeading:string ="Learning Angular"
  subHeading:string =""

  borderStyle = "2px solid blue"
  colorStyle= "green"

   isAlign=true
date:Date=new Date(2023-10-10);
   toChild:string = "Follow the Rules"
   fromChild:string =''


  greet():void{

    console.log("Call Back function called")
    this.subHeading="Hyderabad"
    
  }
  change() {
    this.isAlign=!this.isAlign
  }
  
  captureReply(val:string):void {
    this.fromChild=val
  }
    
}
