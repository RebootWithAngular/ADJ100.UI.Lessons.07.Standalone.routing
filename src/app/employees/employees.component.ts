import { Component } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {}

 export const EmployeesChildrenRoutes: Routes = [
  { path: 'settings', component:  SettingsComponent,  title: 'Employee Settings' },
  { path: 'list', component:  ListComponent, title: 'Employee List' },
  { path: 'profile', component: ProfileComponent,title: 'Employee Profile' },

];




