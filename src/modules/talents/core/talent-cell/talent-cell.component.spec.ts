import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentCellComponent } from './talent-cell.component';

describe('TalentCellComponent', () => {
  let component: TalentCellComponent;
  let fixture: ComponentFixture<TalentCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalentCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
