import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: []
})
export class AppComponent {
  title = 'Angular_17_Demo';
  constructor(private router: Router) {}
  setActive(route: string) {
    this.router.navigate([route]);
  }
}
