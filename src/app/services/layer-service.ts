import { Injectable } from '@angular/core';
import { MapsManagerService } from 'angular-cesium';
import { ImageryLayer } from 'cesium/Source/Scene/ImageryLayer';
import { ExtendedImageryLayer } from '../cesium-extensions/extendedImageryLayer';
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
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/220px-Twitter_bird_logo_2012.svg.png',
      rectangle: Cesium.Rectangle.fromDegrees(w, s, e, n)
    }));
    l1750.alpha = 0.75;
  }

  public addWMSLayer(wmsUrl: string): string {
    let layerProvider = new Cesium.WebMapServiceImageryProvider({
      url: wmsUrl
    });

    let layers = this.getLayers();
    let layer = layers.addImageryProvider(layerProvider);
    const eLayer = new ExtendedImageryLayer(layer);
    eLayer.setLayerName('WMSlayer01');

    let id = UUID.UUID();
    this._layerIndex[id] = eLayer;

    return id;  // Returns the index of the layer which can then be used to identify the layer.
  }

  public getLayer(id: string): ExtendedImageryLayer {
    return this._layerIndex[id];
  }

  public setLayerTransparency(id: string, alpha: Number) {
    const eLayer: ExtendedImageryLayer = this.getLayer(id);
    eLayer.layer.alpha = alpha;
  }

  public toggleLayer(id: string) {
    const eLayer = this.getLayer(id);
    eLayer.layer.show = !eLayer.layer.show;
  }
}
