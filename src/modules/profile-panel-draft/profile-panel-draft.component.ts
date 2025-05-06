import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-profile-panel-draft',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule
    // QuillModule.forRoot()
  ],
  templateUrl: './profile-panel-draft.component.html',
  styleUrl: './profile-panel-draft.component.scss'
})

export class ProfilePanelDraftComponent {
  
  
  onCancel() {
    console.log('Cancel button clicked');
  }

  onSave() {
    console.log('Save button clicked');
  }

}
