import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePanelDraftComponent } from './profile-panel-draft.component';

describe('ProfilePanelDraftComponent', () => {
  let component: ProfilePanelDraftComponent;
  let fixture: ComponentFixture<ProfilePanelDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePanelDraftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilePanelDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
