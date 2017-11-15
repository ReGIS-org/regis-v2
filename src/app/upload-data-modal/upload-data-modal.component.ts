import { Component, ViewChild } from '@angular/core';
import { MdlTextFieldComponent, MdlDialogReference, MdlDialogComponent } from '@angular-mdl/core';

@Component({
  selector: 'app-upload-data-modal',
  templateUrl: './upload-data-modal.component.html',
  styleUrls: ['./upload-data-modal.component.css']
})
export class UploadDataModalComponent  {
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
