import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShamanTalentsComponent } from './shaman-talents.component';

describe('ShamanTalentsComponent', () => {
  let component: ShamanTalentsComponent;
  let fixture: ComponentFixture<ShamanTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShamanTalentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShamanTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
