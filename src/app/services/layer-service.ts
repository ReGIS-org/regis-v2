import { Injectable } from '@angular/core';
import { MapsManagerService } from 'angular-cesium';
import { UUID } from 'angular2-uuid';

@Injectable()
export class LayerService {
  constructor(private mapsManagerService: MapsManagerService) { }

  private _layerIndex = {id: ''};

  private getLayers() {
    let viewer = this.mapsManagerService.getMap().getCesiumViewer();
    let layers = viewer.scene.imageryLayers;
    return layers;
  }

  addTwitterLayer() {
    let layers = this.getLayers();
    
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

  addWMSLayer(wmsUrl: string): string {
    console.log('Loading WMS...');
    let layerProvider = new Cesium.WebMapServiceImageryProvider({
      url: wmsUrl
    });

    let layers = this.getLayers();
    let layer = layers.addImageryProvider(layerProvider);
    
    let id = UUID.UUID();
    console.log("ID: " + id);
    this._layerIndex[id] = layer;

    return id;  // Returns the index of the layer which can then be used to identify the layer.
  }

  getLayer(id: string) {
    return this._layerIndex[id];
  }

  setLayerTransparency(id: string, alpha: Number) {
    let layer = this.getLayer(id);
    layer.alpha = alpha;
  }

  toggleLayer(id: string) {
    let layer = this.getLayer(id);
    layer.show = !layer.show;
  }
}
