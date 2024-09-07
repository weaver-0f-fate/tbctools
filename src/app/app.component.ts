import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatListModule, MatNavList } from '@angular/material/list';
import { MatIcon, MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    // Register custom icon
    this.iconRegistry.addSvgIcon(
      'enhancement_shaman',
      this.sanitizer.bypassSecurityTrustResourceUrl('src\assets\classes\shaman\enhancement_shaman_icon.png')
    );
  }

  toggleShamanMenu() {
    this.shamanMenuOpen = !this.shamanMenuOpen;
  }
}
