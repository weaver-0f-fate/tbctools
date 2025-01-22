import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DruidTalentsComponent } from './druid-talents.component';

describe('DruidTalentsComponent', () => {
  let component: DruidTalentsComponent;
  let fixture: ComponentFixture<DruidTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DruidTalentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DruidTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
