import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { QuillModule } from 'ngx-quill';
import { Store } from '@ngrx/store';
// import { addPanel } from '../../store/actions/panel.actions';
import { AppState } from '@store/state/app.state';
import { StoreModule } from '@ngrx/store';
import { addPanel, panelReducer } from '@store/actions/panel.reducer';
// import { panelReducer } from '../../store/reducers/panel.reducer';


@Component({
    selector: 'app-profile-panel-draft',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        QuillModule
    ],
    templateUrl: './profile-panel-draft.component.html',
    styleUrls: ['./profile-panel-draft.component.scss']
})

export class ProfilePanelDraftComponent {

  content: any;
  
  constructor(private store: Store<AppState>) {
    
  }
  
  onCancel() {
    this.store.select(state => state.panels).subscribe(panels => {
      console.log('Current state panels:', panels);
    });
  }

  onSave() {
    // Dispatch an action to save the content into the ngrx state
    this.store.dispatch(addPanel({ panel: this.content }));
    console.log('Content saved to state:', this.content);
  }

}
