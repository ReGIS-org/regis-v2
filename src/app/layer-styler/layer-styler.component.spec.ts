import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerService } from '../services/layer-service';
import { MapsManagerService } from 'angular-cesium';

import { LayerStylerComponent } from './layer-styler.component';

describe('LayerStylerComponent', () => {
  let component: LayerStylerComponent;
  let fixture: ComponentFixture<LayerStylerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerStylerComponent ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [LayerService, MapsManagerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerStylerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
