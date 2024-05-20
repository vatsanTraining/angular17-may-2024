import { Component } from '@angular/core';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { NgComponentOutlet } from '@angular/common';
import { BudgetComponent } from '../budget/budget.component';

import {MatMenu,  MatMenuTrigger} from '@angular/material/menu'
import {MatButton} from '@angular/material/button'
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgComponentOutlet,MatButton,MatMenu,MatMenuTrigger,MatIcon],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  currentComponent = TaskDetailsComponent

showComponent(option: string) {

  switch (option){
  case 'budget':
    this.currentComponent= BudgetComponent
    break
    case 'tasks':
      this.currentComponent=TaskDetailsComponent
}

}
}