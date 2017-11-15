import { Component, ViewChild, OnInit } from '@angular/core';
import { MdlTextFieldComponent, MdlDialogReference, MdlDialogComponent } from '@angular-mdl/core';

@Component({
  selector: 'app-run-compute-modal',
  templateUrl: './run-compute-modal.component.html',
  styleUrls: ['./run-compute-modal.component.css']
})
export class RunComputeModalComponent {
  @ViewChild('runComputeDialog') private runComputeDialog: MdlDialogComponent;
  @ViewChild(MdlTextFieldComponent) private simNameField: MdlTextFieldComponent;
  @ViewChild(MdlTextFieldComponent) private maxIterField: MdlTextFieldComponent;
  @ViewChild(MdlTextFieldComponent) private stopCrtField: MdlTextFieldComponent;

  public simName: string;
  public maxIter: number;
  public stopCrt: number;

  constructor() {
  }

  public saveSimulation() {
    console.log(this.simName);
    console.log(this.maxIter);
    console.log(this.maxIter);
    this.runComputeDialog.close();
  }

  public onDialogShow(dialogRef: MdlDialogReference) {
    // this.textFieldName.setFocus();
  }

  public onDialogHide() {
    console.log(`dialog hidden`);
  }

}
