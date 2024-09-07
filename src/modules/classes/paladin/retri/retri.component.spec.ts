import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetriComponent } from './retri.component';

describe('RetriComponent', () => {
  let component: RetriComponent;
  let fixture: ComponentFixture<RetriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
