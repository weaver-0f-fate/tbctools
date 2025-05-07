import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-profile-panel',
    standalone: true,
    imports: [],
    templateUrl: './profile-panel.component.html',
    styleUrl: './profile-panel.component.scss'
})
export class ProfilePanelComponent {
    @Input() panel!: string;

    constructor() {
        console.log(this.panel)
    }
}
