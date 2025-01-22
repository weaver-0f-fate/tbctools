import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { ShamanTalentsComponent } from '../../../talents/classes/shaman-talents/shaman-talents.component';

@Component({
  selector: 'app-elemental',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule, ShamanTalentsComponent],
  templateUrl: './elemental.component.html',
  styleUrl: './elemental.component.scss'
})
export class ElementalComponent {
  title = 'Elemental Shaman';

  tabs = [
    { label: 'Character', link: '/character' },
    { label: 'Talents', link: '/talents' },
    { label: 'Settings', link: '/settings' },
    { label: 'Results', link: '/results' },
    { label: 'Logs', link: '/logs' }
  ];
}
