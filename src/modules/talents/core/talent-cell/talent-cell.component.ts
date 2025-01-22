import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Talents } from '../../../../assets/talents/shamanElemental';

@Component({
  selector: 'app-talent-cell',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './talent-cell.component.html',
  styleUrl: './talent-cell.component.scss'
})

export class TalentCellComponent {
  @Input() talentTitle!: string;
  
  imageUrl: string = '';
  talentUrl: string = '';
  maxPoints: number = 0;

  currentPoints: number = 0;

  constructor() {
  }

  ngOnInit() {
    const talent = Talents.find(t => t.title === this.talentTitle);

    this.imageUrl = talent!.iconUrl;
    this.talentUrl = talent!.ranks[0].spellUrl;
    this.maxPoints = talent!.ranks.length;
  }
}
