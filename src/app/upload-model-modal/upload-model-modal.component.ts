import { Component, ViewChild, OnInit } from '@angular/core';
import { MdlTextFieldComponent, MdlDialogReference, MdlDialogComponent } from '@angular-mdl/core';

@Component({
  selector: 'app-upload-model-modal',
  templateUrl: './upload-model-modal.component.html',
  styleUrls: ['./upload-model-modal.component.css']
})
export class UploadModelModalComponent {
  @ViewChild('editModelDialog') private editModelDialog: MdlDialogComponent;
  @ViewChild(MdlTextFieldComponent) private textFieldName: MdlTextFieldComponent;

  public modelName = '';
  public editedModelName: string;

  constructor() {
  }

  public saveModel() {
    // this.selectedLayerName = this.
    this.modelName = this.editedModelName;
    this.editModelDialog.close();
  }

  public onDialogShow(dialogRef: MdlDialogReference) {
    this.editedModelName = this.modelName;
    // this.textFieldName.setFocus();
  }

  public onDialogHide() {
    console.log(`dialog hidden`);
  }

}
