import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LayerService } from '../services/layer-service';
import { MdlTextFieldComponent, MdlDialogReference, MdlDialogComponent } from '@angular-mdl/core';

@Component({
  selector: 'app-layer-styler',
  templateUrl: './layer-styler.component.html',
  styleUrls: ['./layer-styler.component.scss'],
})

export class LayerStylerComponent implements OnInit {
  @ViewChild('editLayerDialog') private editLayerDialog: MdlDialogComponent;
  @ViewChild('uploadBtn') private uploadBtn: any;

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
    const alpha = event.target.valueAsNumber;
    this.layerService.setLayerTransparency(this.layerId, alpha);
  }

  toggleWmsLayer() {
    this.layerService.toggleLayer(this.layerId);
  }

  public saveLayerEdit() {
    this.layerService.getLayer(this.layerId).layerName = this.editedLayerName;
    this.editLayerDialog.close();
  }

  public onDialogShow(dialogRef: MdlDialogReference) {
    // this.textFieldName.setFocus();
  }

  public onDialogHide() {
    console.log(`dialog hidden`);
  }
}
