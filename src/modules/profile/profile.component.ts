import { Component } from '@angular/core';
import { ProfileHeaderComponent } from '../profile-header/profile-header.component';
import { ProfilePanelComponent } from '../profile-panel/profile-panel.component';
import { ProfilePanelDraftComponent } from '../profile-panel-draft/profile-panel-draft.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '@store/state/app.state';
import { addPanel } from '@store/actions/panel.reducer';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        CommonModule,
        ProfileHeaderComponent,
        ProfilePanelComponent,
        ProfilePanelDraftComponent
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent {
    panels$: Observable<string[]>;

    constructor(private store: Store<AppState>) {
        // Initialize the panels array with some data
        // this.store.dispatch(addPanel({ panel: this.panels }));
        this.panels$ = this.store.select(state => state.panels);

        this.panels$.subscribe(panels => {
            console.log(panels); // Should log an array of strings
        });
    }
}
