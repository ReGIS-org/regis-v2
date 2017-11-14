import { Component, OnInit, ViewChild, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { MdlDialogComponent } from '@angular-mdl/core';
import { LayerService } from '../services/layer-service';

import { AddLayerModalComponent } from '../add-layer-modal/add-layer-modal.component';

@Component({
  selector: 'app-layer-selector',
  templateUrl: './layer-selector.component.html',
  styleUrls: ['./layer-selector.component.css'],
  providers: [LayerService],
  encapsulation: ViewEncapsulation.None
})
export class LayerSelectorComponent implements OnInit, AfterContentInit {
  constructor(private layerService: LayerService) {
  }

  ngAfterContentInit() {
  }

  ngOnInit() {
  }

  showLayer() {
    this.layerService.showLayer();
  }
}
