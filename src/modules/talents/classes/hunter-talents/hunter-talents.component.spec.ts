import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HunterTalentsComponent } from './hunter-talents.component';

describe('HunterTalentsComponent', () => {
  let component: HunterTalentsComponent;
  let fixture: ComponentFixture<HunterTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HunterTalentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HunterTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
