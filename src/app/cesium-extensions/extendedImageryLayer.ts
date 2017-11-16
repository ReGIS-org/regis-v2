import { ImageryLayer } from 'cesium/Source/Scene/ImageryLayer';

export class ExtendedImageryLayer {
    public layerName: string;
    public layer: ImageryLayer;

    constructor(name: string, layer: ImageryLayer) {
        this.layerName = name;
        this.layer = layer;
    }

    public setLayerName(layerName: string) {
        this.layerName = layerName;
    }

    public getLayerName() {
        return this.layerName;
    }
}
