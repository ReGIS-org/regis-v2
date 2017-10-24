import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App3dTileLayerComponent } from './app-3d-tile-layer.component';

describe('App3dTileLayerComponent', () => {
  let component: App3dTileLayerComponent;
  let fixture: ComponentFixture<App3dTileLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App3dTileLayerComponent ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App3dTileLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
