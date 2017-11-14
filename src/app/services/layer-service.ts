import { Injectable } from '@angular/core';
import { MapsManagerService } from 'angular-cesium';

@Injectable()
export class LayerService {

  constructor(private mapsManagerService: MapsManagerService) { }

  getLayers() {
    let viewer = this.mapsManagerService.getMap().getCesiumViewer();
    let layers = viewer.scene.imageryLayers
    return layers;
  }

  showLayer() {
    const layers = this.getLayers();
    
    const s = 0;
    const n = 10;
    const w = 0;
    const e = 10;
    const l1750 = layers.addImageryProvider(new Cesium.SingleTileImageryProvider({
      url : 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/220px-Twitter_bird_logo_2012.svg.png',
      rectangle : Cesium.Rectangle.fromDegrees(w,s,e,n)
    }));
    l1750.alpha = 0.75;
  }

  showWMSLayer(wmsUrl: String) {
    let layerProvider = new Cesium.WebMapServiceImageryProvider({
      url: wmsUrl
    });

    let layers = this.getLayers();
    layers.addImageryProvider(layerProvider);
  }
}
