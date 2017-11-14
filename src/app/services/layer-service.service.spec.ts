import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { LayerService } from '../services/layer-service';
import { MapsManagerService } from 'angular-cesium';

describe('LayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayerService, MapsManagerService]
    });
  });

  it('should be created', 
  inject([LayerService, MapsManagerService], 
    (service: LayerService) => {
    expect(service).toBeTruthy();
  }));
});
