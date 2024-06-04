import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layoutForTopLevelNav/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, LayoutComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-standalone-routing';
}
