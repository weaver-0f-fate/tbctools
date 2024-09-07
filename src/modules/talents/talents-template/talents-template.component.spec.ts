import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsTemplateComponent } from './talents-template.component';

describe('TalentsTemplateComponent', () => {
  let component: TalentsTemplateComponent;
  let fixture: ComponentFixture<TalentsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentsTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalentsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
