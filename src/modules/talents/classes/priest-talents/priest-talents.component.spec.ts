import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriestTalentsComponent } from './priest-talents.component';

describe('PriestTalentsComponent', () => {
  let component: PriestTalentsComponent;
  let fixture: ComponentFixture<PriestTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriestTalentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriestTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
