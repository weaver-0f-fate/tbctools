import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtComponent } from './prot.component';

describe('ProtComponent', () => {
  let component: ProtComponent;
  let fixture: ComponentFixture<ProtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
