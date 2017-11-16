import { Component, OnInit, ViewChild, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { MdlDialogComponent } from '@angular-mdl/core';
import { LayerService } from '../services/layer-service';

import { AddLayerModalComponent } from '../add-layer-modal/add-layer-modal.component';
import { LayerStylerComponent } from '../layer-styler/layer-styler.component';

@Component({
  selector: 'app-layer-selector',
  templateUrl: './layer-selector.component.html',
  styleUrls: ['./layer-selector.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LayerSelectorComponent implements OnInit, AfterContentInit {
  private myLayers = [];

  constructor(private layerService: LayerService) {
  }

  ngAfterContentInit() {
  }

  ngOnInit() {
  }

  addTwitterLayer() {
    this.layerService.addTwitterLayer();
  }

  addWmsLayer() {
    console.log('Call service to show WMS layer...');
    const wmsUrl = 'https://ahocevar.com/geoserver/wms';
    const wmsLayers = 'topp:states';

    const layer = this.layerService.addWMSLayer(wmsUrl, wmsLayers);
    this.myLayers.push(layer);
  }
}
