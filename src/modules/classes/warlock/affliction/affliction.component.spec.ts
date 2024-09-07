import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfflictionComponent } from './affliction.component';

describe('AfflictionComponent', () => {
  let component: AfflictionComponent;
  let fixture: ComponentFixture<AfflictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfflictionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfflictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
