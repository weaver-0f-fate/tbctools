import { Component } from '@angular/core';
import { ProfileHeaderComponent } from '../profile-header/profile-header.component';
import { ProfilePanelComponent } from '../profile-panel/profile-panel.component';
import { ProfilePanelDraftComponent } from '../profile-panel-draft/profile-panel-draft.component';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        ProfileHeaderComponent,
        ProfilePanelComponent,
        ProfilePanelDraftComponent
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
