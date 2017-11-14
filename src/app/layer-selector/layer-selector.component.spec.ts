import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerService } from '../services/layer-service';
import { LayerSelectorComponent } from './layer-selector.component';
import { MapsManagerService } from 'angular-cesium';

describe('LayerSelectorComponent', () => {
  let component: LayerSelectorComponent;
  let fixture: ComponentFixture<LayerSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerSelectorComponent ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [LayerService, MapsManagerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
