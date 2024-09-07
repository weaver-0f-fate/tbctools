import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatListModule, MatNavList } from '@angular/material/list';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    MatToolbar, 
    MatSidenavContent, 
    MatNavList, 
    MatSidenav, 
    MatIcon, 
    MatSidenavContainer,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatListItem
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Weave TBC simulator';
  shamanMenuOpen = true;

  toggleShamanMenu() {
    this.shamanMenuOpen = !this.shamanMenuOpen;
  }
}
