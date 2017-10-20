import { Component } from '@angular/core';
import { MapLayerProviderOptions } from 'angular-cesium/src/angular-cesium/models/map-layer-provider-options.enum';
import { MapsManagerService } from 'angular-cesium/src/angular-cesium/services/maps-manager/maps-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  planes = [];
  MapLayerProviderOptions = MapLayerProviderOptions;
  Cesium = Cesium;
  mapsManagerService = MapsManagerService;
  selectedSceneMode = Cesium.SceneMode.SCENE2D;
}
