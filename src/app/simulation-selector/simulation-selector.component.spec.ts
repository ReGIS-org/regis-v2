import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationSelectorComponent } from './simulation-selector.component';

describe('SimulationSelectorComponent', () => {
  let component: SimulationSelectorComponent;
  let fixture: ComponentFixture<SimulationSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
