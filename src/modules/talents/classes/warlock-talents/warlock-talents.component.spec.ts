import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarlockTalentsComponent } from './warlock-talents.component';

describe('WarlockTalentsComponent', () => {
  let component: WarlockTalentsComponent;
  let fixture: ComponentFixture<WarlockTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarlockTalentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarlockTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
