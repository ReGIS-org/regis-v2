import { Injectable } from '@angular/core';
import { MapsManagerService } from 'angular-cesium';
import { ImageryLayer } from 'cesium/Source/Scene/ImageryLayer';
import { UUID } from 'angular2-uuid';

@Injectable()
export class LayerService {
  constructor(private mapsManagerService: MapsManagerService) { }

  private _layerIndex = {};

  private getLayers() {
    const viewer = this.mapsManagerService.getMap().getCesiumViewer();
    const layers = viewer.scene.imageryLayers;
    return layers;
  }

  public addTwitterLayer() {
    const layers = this.getLayers();

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

  public addWMSLayer(wmsUrl: string, wmsLayers: string, proxy: any = {}, parameters: any = {}): string {
    const layerProvider = new Cesium.WebMapServiceImageryProvider({
      url: wmsUrl,
      layers: wmsLayers
    });

    const layers = this.getLayers();
    const layer = layers.addImageryProvider(layerProvider);


    const id = UUID.UUID();
    this._layerIndex[id] = layer;

    return id;  // Returns the index of the layer which can then be used to identify the layer.
  }

  public getLayer(id: string): ImageryLayer {
    return this._layerIndex[id];
  }

  public setLayerTransparency(id: string, alpha: Number) {
    const layer: ImageryLayer = this.getLayer(id);
    layer.alpha = alpha;
  }

  public toggleLayer(id: string) {
    const layer = this.getLayer(id);
    layer.show = !layer.show;
  }
}
