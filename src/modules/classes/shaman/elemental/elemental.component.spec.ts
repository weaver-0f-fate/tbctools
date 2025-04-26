import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementalComponent } from './elemental.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ElementalComponent', () => {
  let component: ElementalComponent;
  let fixture: ComponentFixture<ElementalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ElementalComponent,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
