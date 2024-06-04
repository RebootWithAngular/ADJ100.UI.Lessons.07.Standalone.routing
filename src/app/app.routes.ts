import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LayoutComponent } from './layoutForTopLevelNav/layout.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';                 // for standalone
import { EmployeesComponent, EmployeesChildrenRoutes } from './employees/employees.component';
import { GuestChildrenRoutes, GuestComponent } from './guests/guests.component';
import { SuppliersComponent, SuppliersChildrenRoutes } from './suppliers/suppliers.component';

  export const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '',           component: HomeComponent,                                         title: "Home"},
        { path: 'about',      component: AboutComponent ,                                       title: "About"},
        { path: 'contactus',  component: ContactusComponent ,                                   title: "Contact us"},
        { path: 'suppliers',  component: SuppliersComponent, children: SuppliersChildrenRoutes, title: 'Suppliers' },
        { path: 'employees',  component: EmployeesComponent, children: EmployeesChildrenRoutes, title: 'Employees' },
        { path: 'guests',     component: GuestComponent,     children: GuestChildrenRoutes,     title: 'Guests' }
               ]
    } ] ;

    
  

  export const appConfig = [                                                                      // for standalone
    provideRouter(routes, withComponentInputBinding())
  ];
  
