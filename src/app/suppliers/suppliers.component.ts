import { Component } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { OverviewComponent } from './overview/overview.component';
import { ReviewsComponent } from './reviews/reviews.component';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.css'
})
export class SuppliersComponent {}

export const SuppliersChildrenRoutes: Routes = [
  { path: 'detail', component:  DetailComponent,  title: 'Supplier Detail' },
  { path: 'overview', component:  OverviewComponent, title: '\Supplier Overview' },
  { path: 'reviews', component: ReviewsComponent,title: 'Supplier Reviews' },

];