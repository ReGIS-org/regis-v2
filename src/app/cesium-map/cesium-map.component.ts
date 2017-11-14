import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { AcNotification, AcMapComponent, ViewerConfiguration, SceneMode } from 'angular-cesium';
import { AppSettingsService } from '../services/app-settings-service';
import { MapLayerProviderOptions } from '../models/map-layer-provider-options.enum';



@Component({
  selector: 'app-cesium-map',
  templateUrl: './cesium-map.component.html',
  providers: [ViewerConfiguration, AppSettingsService],
  styleUrls: ['./cesium-map.component.css']
})
export class CesiumMapComponent implements AfterViewInit, OnInit {
  sceneMode = SceneMode.SCENE3D;

  constructor(private viewerConf: ViewerConfiguration,
    private appSettingsService: AppSettingsService) {
    viewerConf.viewerOptions = {
      selectionIndicator: true,
      timeline: true,
      infoBox: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      homeButton: false,
      geocoder: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      sceneModePicker: false,
      show3dtiles: true
    };

    viewerConf.viewerModifier = (viewer) => {
      viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
      viewer.bottomContainer.remove();
    };
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }
}
