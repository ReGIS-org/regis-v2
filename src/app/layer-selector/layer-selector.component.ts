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
    console.log("Call service to show WMS layer...");
    const wmsUrl = "https://demo.boundlessgeo.com/geoserver/ows?&service=WMS&request=GetMap&layers=ne%3Ane_10m_admin_0_boundary_lines_land&styles=&format=image%2Fjpeg&transparent=false&version=1.1.1&height=256&width=256&srs=EPSG%3A3857&bbox=-10018754.171394622,0,-5009377.085697311,5009377.085697314";
    let layer = this.layerService.addWMSLayer(wmsUrl);
    this.myLayers.push(layer);
  }
}
