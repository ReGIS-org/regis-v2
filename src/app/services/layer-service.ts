import { Injectable } from '@angular/core';
import { MapsManagerService } from 'angular-cesium';
import { ImageryLayer } from 'cesium/Source/Scene/ImageryLayer';
import { UUID } from 'angular2-uuid';

@Injectable()
export class LayerService {
  constructor(private mapsManagerService: MapsManagerService) { }

  private _layerIndex = {};

  private getLayers() {
    let viewer = this.mapsManagerService.getMap().getCesiumViewer();
    let layers = viewer.scene.imageryLayers;
    return layers;
  }

  public addTwitterLayer() {
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

  public addWMSLayer(wmsUrl: string): string {
    let layerProvider = new Cesium.WebMapServiceImageryProvider({
      url: wmsUrl
    });

    let layers = this.getLayers();
    let layer = layers.addImageryProvider(layerProvider);
    
    
    let id = UUID.UUID();
    this._layerIndex[id] = layer;

    return id;  // Returns the index of the layer which can then be used to identify the layer.
  }

  public getLayer(id: string): ImageryLayer {
    return this._layerIndex[id];
  }

  public setLayerTransparency(id: string, alpha: Number) {
    let layer: ImageryLayer = this.getLayer(id);
    layer.alpha = alpha;
  }

  public toggleLayer(id: string) {
    let layer = this.getLayer(id);
    layer.show = !layer.show;
  }
}
