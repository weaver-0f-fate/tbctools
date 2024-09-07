import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcaneComponent } from './arcane.component';

describe('ArcaneComponent', () => {
  let component: ArcaneComponent;
  let fixture: ComponentFixture<ArcaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArcaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
