import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostComponent } from './frost.component';

describe('FrostComponent', () => {
  let component: FrostComponent;
  let fixture: ComponentFixture<FrostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
