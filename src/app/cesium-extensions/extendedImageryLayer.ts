import { ImageryLayer } from 'cesium/Source/Scene/ImageryLayer';

export class ExtendedImageryLayer {

    public layerName: string;
    public layer: ImageryLayer;

    constructor(layer: ImageryLayer) {
        this.layer = layer;
    }

    public setLayerName(layerName) {
        this.layerName = layerName;
    }

    public getLayerName() {
        return this.layerName;
    }
}
