import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorTalentsComponent } from './warrior-talents.component';

describe('WarriorTalentsComponent', () => {
  let component: WarriorTalentsComponent;
  let fixture: ComponentFixture<WarriorTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarriorTalentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarriorTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
