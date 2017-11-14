import { Component, ViewChild } from '@angular/core';
import { MdlTextFieldComponent, MdlDialogReference, MdlDialogComponent } from '@angular-mdl/core';

@Component({
  selector: 'app-add-layer-modal',
  templateUrl: './add-layer-modal.component.html',
  styleUrls: ['./add-layer-modal.component.css']
})
export class AddLayerModalComponent {
  @ViewChild('editLayerDialog') private editLayerDialog: MdlDialogComponent;
  @ViewChild(MdlTextFieldComponent) private textFieldName: MdlTextFieldComponent;

  public layerName = '';
  public editedLayerName: string;

  constructor() {
  }

  public saveLayer() {
    this.layerName = this.editedLayerName;
    this.editLayerDialog.close();
  }

  public onDialogShow(dialogRef: MdlDialogReference) {
    this.editedLayerName = this.layerName;
    this.textFieldName.setFocus();
  }

  public onDialogHide() {
    console.log(`dialog hidden`);
  }
}
