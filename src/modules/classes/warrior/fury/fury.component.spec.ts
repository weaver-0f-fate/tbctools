import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuryComponent } from './fury.component';

describe('FuryComponent', () => {
  let component: FuryComponent;
  let fixture: ComponentFixture<FuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
