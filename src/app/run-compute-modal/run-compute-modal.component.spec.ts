import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunComputeModalComponent } from './run-compute-modal.component';

describe('RunComputeModalComponent', () => {
  let component: RunComputeModalComponent;
  let fixture: ComponentFixture<RunComputeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunComputeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunComputeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
