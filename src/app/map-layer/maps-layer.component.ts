import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MapLayerProviderOptions } from '../models/map-layer-provider-options.enum';
import { AppSettingsService } from '../services/app-settings-service';
import { AcMapLayerProviderComponent } from 'angular-cesium';

@Component({
    selector: 'app-maps-layer',
    templateUrl: 'maps-layer.component.html',
    providers: [AppSettingsService]
})

export class MapsLayerComponent implements AfterViewInit {

    @ViewChild('blackmarble') blackMarbleMap: AcMapLayerProviderComponent;

    MapLayerProviderOptions = MapLayerProviderOptions;
    Cesium = Cesium;

    constructor(public appSettingsService: AppSettingsService) {
    }

    ngAfterViewInit(): void {

        if (this.blackMarbleMap && this.blackMarbleMap.imageryLayer) {
            // another way to set alpha (or any imageLayers settings)
            this.blackMarbleMap.imageryLayer.alpha = 0.5;
        }
    }
}
