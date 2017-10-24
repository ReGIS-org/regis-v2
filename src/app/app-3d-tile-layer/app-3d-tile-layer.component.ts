import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../services/app-settings-service';
import { MapLayerProviderOptions } from '../models/map-layer-provider-options.enum';
import { AcTileset3dComponent } from 'angular-cesium';

@Component({
  selector: 'app-3d-tile-layer',
  templateUrl: './app-3d-tile-layer.component.html',
  providers: [AppSettingsService],
  styleUrls: ['./app-3d-tile-layer.component.css']
})
export class App3dTileLayerComponent implements OnInit {
  arcGisMapServerProvider = MapLayerProviderOptions.ArcGisMapServer;

  constructor(private appSettingsService: AppSettingsService) { }

  ngOnInit() {
  }

}
