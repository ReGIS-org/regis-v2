import { Injectable } from '@angular/core';
import { MapsManagerService } from 'angular-cesium';

@Injectable()
export class LayerService {

  constructor(private mapsManagerService: MapsManagerService) { }

  showLayer() {
    console.log("Do show layer...");
    const viewer = this.mapsManagerService.getMap().getCesiumViewer();
    
    const layers = viewer.scene.imageryLayers;
    
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
}
