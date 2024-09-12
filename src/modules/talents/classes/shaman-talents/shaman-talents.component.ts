import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Class } from '../../../../models/enums';
import { MatTab } from '@angular/material/tabs';
import { TalentCellComponent } from '../../core/talent-cell/talent-cell.component';

@Component({
  selector: 'app-shaman-talents',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatTab, TalentCellComponent],
  templateUrl: './shaman-talents.component.html',
  styleUrl: './shaman-talents.component.scss'
})
export class ShamanTalentsComponent {
}
