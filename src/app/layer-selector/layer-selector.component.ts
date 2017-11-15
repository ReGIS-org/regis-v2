import { Component, OnInit } from '@angular/core';
import { LayerService } from '../services/layer-service';


@Component({
  selector: 'app-layer-selector',
  templateUrl: './layer-selector.component.html',
  styleUrls: ['./layer-selector.component.css'],
  providers: [LayerService],
})
export class LayerSelectorComponent implements OnInit {
  private myLayer = null;

  constructor(private layerService: LayerService) {
  }

  ngOnInit() {
  }

  addTwitterLayer() {
    this.layerService.addTwitterLayer();
  }

  showWmsLayer() {
    console.log("Call service to show WMS layer...");
    const wmsUrl = "https://demo.boundlessgeo.com/geoserver/ows?&service=WMS&request=GetMap&layers=ne%3Ane_10m_admin_0_boundary_lines_land&styles=&format=image%2Fjpeg&transparent=false&version=1.1.1&height=256&width=256&srs=EPSG%3A3857&bbox=-10018754.171394622,0,-5009377.085697311,5009377.085697314";
    this.myLayer = this.layerService.addWMSLayer(wmsUrl);
  }

  toggleWmsLayer() {
    this.layerService.toggleLayer(this.myLayer);
  }
}
