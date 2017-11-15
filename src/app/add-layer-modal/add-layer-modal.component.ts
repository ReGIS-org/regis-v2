import { Component, ViewChild } from '@angular/core';
import { MdlTextFieldComponent, MdlDialogReference, MdlDialogComponent } from '@angular-mdl/core';

@Component({
  selector: 'app-add-layer-modal',
  templateUrl: './add-layer-modal.component.html',
  styleUrls: ['./add-layer-modal.component.scss']
})
export class AddLayerModalComponent {
  @ViewChild('editLayerDialog') private editLayerDialog: MdlDialogComponent;
  @ViewChild(MdlTextFieldComponent) private layerNameField: MdlTextFieldComponent;
  @ViewChild('uploadBtn') private uploadBtn: any;

  public layerName: string;

  public layerFile: File;
  public layerFileName: string;

  public layerFormat: string;
  public formats = ['geojson', 'shape', 'grid'];

  constructor() {
  }

  public doFileChange(fileInput: any) {
    console.log('File changed');
    if (fileInput.target.files && fileInput.target.files[0]) {
      console.log(fileInput.target.files[0]);
      // Store file and fileName separately
      this.layerFile = fileInput.target.files[0];
      this.layerFileName = fileInput.target.files[0].name;
    }
  }

  public saveLayer() {
    this.editLayerDialog.close();
  }

  public onDialogShow(dialogRef: MdlDialogReference) {
    // this.textFieldName.setFocus();
  }

  public onDialogHide() {
    console.log(`dialog hidden`);
  }
}
