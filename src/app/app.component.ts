import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatListModule, MatNavList } from '@angular/material/list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from '../modules/profile/profile.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        // RouterOutlet,
        // MatToolbar,
        // MatSidenavContent,
        // MatNavList,
        // MatSidenav,
        // MatIcon,
        // MatSidenavContainer,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        // MatListItem,
        ProfileComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gaming Profile';
  shamanMenuOpen = true;

  toggleShamanMenu() {
    this.shamanMenuOpen = !this.shamanMenuOpen;
  }
}
