import { Component, OnInit, Input } from '@angular/core';
import { LayerService } from '../services/layer-service';

@Component({
  selector: 'app-layer-styler',
  templateUrl: './layer-styler.component.html',
  styleUrls: ['./layer-styler.component.css'],
})

export class LayerStylerComponent implements OnInit {
  
  private layerLoaded = false;
  public layerChecked = true;
  public editedLayerName: string;

  // Layer ID gets passed on component init
  @Input() layerId: string;

  constructor(private layerService: LayerService) { }

  ngOnInit() {
    console.log('Child data [onInit]: ' + this.layerId);
  }

  getLayerName() {
    return this.layerService.getLayer(this.layerId).layerName;
  }

  updateAlpha(event: any) {
    let alpha = event.target.valueAsNumber;
    this.layerService.setLayerTransparency(this.layerId, alpha);
  }

  toggleWmsLayer() {
    this.layerService.toggleLayer(this.layerId);
  }
}
