import { Component, ViewChild, OnInit } from '@angular/core';
import { MdlTextFieldComponent, MdlDialogReference, MdlDialogComponent } from '@angular-mdl/core';

@Component({
  selector: 'app-upload-model-modal',
  templateUrl: './upload-model-modal.component.html',
  styleUrls: ['./upload-model-modal.component.scss']
})
export class UploadModelModalComponent {
  @ViewChild('editModelDialog') private editModelDialog: MdlDialogComponent;
  @ViewChild(MdlTextFieldComponent) private modelFieldName: MdlTextFieldComponent;
  @ViewChild('uploadBtn') private uploadBtn: any;

  public modelName: string;
  public modelFile: File;
  public modelFileName: string;

  constructor() {
    console.log('Do construct...');
  }

  public doFileChange(fileInput: any) {
    console.log('File changed');
    if (fileInput.target.files && fileInput.target.files[0]) {
      console.log(fileInput.target.files[0]);
      // Store file and fileName separately
      this.modelFile = fileInput.target.files[0];
      this.modelFileName = fileInput.target.files[0].name;
    }
  }

  public saveModel() {
    this.editModelDialog.close();
  }

  public onDialogShow(dialogRef: MdlDialogReference) {
    console.log(`show model dialog`);
    // this.textFieldName.setFocus();
  }

  public onDialogHide() {
    console.log(this.modelName);
    console.log(this.modelFile);
    console.log(`hide model dialog`);
  }

}
