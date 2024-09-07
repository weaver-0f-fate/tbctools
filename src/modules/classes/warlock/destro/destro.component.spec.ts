import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroComponent } from './destro.component';

describe('DestroComponent', () => {
  let component: DestroComponent;
  let fixture: ComponentFixture<DestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
