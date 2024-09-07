import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { TalentsTemplateComponent } from '../../talents/talents-template/talents-template.component';

@Component({
  selector: 'app-class-layout',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule, TalentsTemplateComponent],
  templateUrl: './class-layout.component.html',
  styleUrl: './class-layout.component.scss'
})
export class ClassLayoutComponent {
  @Input() class!: string;
  
  title = 'My Application';

  tabs = [
    { label: 'Character', link: '/character' },
    { label: 'Talents', link: '/talents' },
    { label: 'Settings', link: '/settings' },
    { label: 'Results', link: '/results' },
    { label: 'Logs', link: '/logs' }
  ];
}
