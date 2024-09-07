import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvComponent } from './surv.component';

describe('SurvComponent', () => {
  let component: SurvComponent;
  let fixture: ComponentFixture<SurvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
