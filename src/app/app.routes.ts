import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { universalGuard } from './universal.guard';
import { AdduserComponent } from './adduser/adduser.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ShowemployeeComponent } from './showemployee/showemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'header',component:HeaderComponent},
    {path:'adduser',component:AdduserComponent},
    {path:'addemployee',component:AddemployeeComponent},
    {path:'showemployee',component:ShowemployeeComponent},
    {path:'dashboard',component:DashboardComponent},
    
    {path:'editemployee/:id',component:EditemployeeComponent},

    
    {path:'user',component:UserComponent,canActivate:[universalGuard]},
    {path:'tasks',component:TasksComponent},
    {path:'footer',component:FooterComponent}
]

