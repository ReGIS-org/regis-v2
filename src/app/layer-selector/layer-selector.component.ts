import { Component, OnInit } from '@angular/core';
import { LayerService } from '../services/layer-service';


@Component({
  selector: 'app-layer-selector',
  templateUrl: './layer-selector.component.html',
  styleUrls: ['./layer-selector.component.css'],
  providers: [LayerService],
})
export class LayerSelectorComponent implements OnInit {

  constructor(private layerService: LayerService) {
  }

  ngOnInit() {
  }

  showLayer() {
    this.layerService.showLayer();
  }
}
