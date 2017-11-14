import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MdlLayoutComponent } from '@angular-mdl/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisLayoutComponent } from './regis-layout.component';

describe('RegisLayoutComponent', () => {
  let component: RegisLayoutComponent;
  let fixture: ComponentFixture<RegisLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisLayoutComponent,
        MdlLayoutComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
