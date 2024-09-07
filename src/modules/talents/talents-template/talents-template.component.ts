import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-talents-template',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './talents-template.component.html',
  styleUrl: './talents-template.component.scss'
})
export class TalentsTemplateComponent {
  @Input() class!: string;

  images: string[] = Array(36).fill('assets/classes/shaman/enhancement_shaman_icon.png');
}
