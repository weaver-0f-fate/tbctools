import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RogueTalentsComponent } from './rogue-talents.component';

describe('RogueTalentsComponent', () => {
  let component: RogueTalentsComponent;
  let fixture: ComponentFixture<RogueTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RogueTalentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RogueTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
