import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MageTalentsComponent } from './mage-talents.component';

describe('MageTalentsComponent', () => {
  let component: MageTalentsComponent;
  let fixture: ComponentFixture<MageTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MageTalentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MageTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
