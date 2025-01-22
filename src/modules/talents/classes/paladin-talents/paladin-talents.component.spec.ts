import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaladinTalentsComponent } from './paladin-talents.component';

describe('PaladinTalentsComponent', () => {
  let component: PaladinTalentsComponent;
  let fixture: ComponentFixture<PaladinTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaladinTalentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaladinTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
