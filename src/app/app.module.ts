import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdlModule, MdlIconModule } from '@angular-mdl/core';
import { MdlPopoverModule } from '@angular-mdl/popover';
import { MdlSelectModule } from '@angular-mdl/select';

import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';
import { CesiumMapComponent } from './cesium-map/cesium-map.component';
import { ProjectlogoComponent } from './projectlogo/projectlogo.component';
import { MapsLayerComponent } from './map-layer/maps-layer.component';
import { MenuComponent } from './menu/menu.component';
import { LayerSelectorComponent } from './layer-selector/layer-selector.component';
import { RegisLayoutComponent } from './regis-layout/regis-layout.component';
import { AddLayerModalComponent } from './add-layer-modal/add-layer-modal.component';
import { UploadDataModalComponent } from './upload-data-modal/upload-data-modal.component';
import { UploadModelModalComponent } from './upload-model-modal/upload-model-modal.component';
import { RunComputeModalComponent } from './run-compute-modal/run-compute-modal.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { ModelSelectorComponent } from './model-selector/model-selector.component';
import { SimulationSelectorComponent } from './simulation-selector/simulation-selector.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    CesiumMapComponent,
    ProjectlogoComponent,
    MapsLayerComponent,
    MenuComponent,
    LayerSelectorComponent,
    RegisLayoutComponent,
    AddLayerModalComponent,
    UploadDataModalComponent,
    UploadModelModalComponent,
    RunComputeModalComponent,
    DataSelectorComponent,
    ModelSelectorComponent,
    SimulationSelectorComponent
  ],
  imports: [
    MdlModule,
    MdlIconModule,
    MdlPopoverModule,
    MdlSelectModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularCesiumModule.forRoot()
  ],
  // entryComponents: [ AddLayerModalComponent ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
