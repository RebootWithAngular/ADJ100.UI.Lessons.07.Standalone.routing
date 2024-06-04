import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { CheckinComponent } from './checkin/checkin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-guests',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.css'
})


export class GuestComponent {}

 export const GuestChildrenRoutes: Routes = [
  { path: 'checkin', component:  CheckinComponent,  title: 'Guest Checkin' },
  { path: 'feedback', component:  FeedbackComponent, title: 'Guest Feedback' },
  { path: 'history', component: HistoryComponent,title: 'Guest History' },

];