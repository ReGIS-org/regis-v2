import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdlModule, MdlIconModule } from '@angular-mdl/core';
import { MdlPopoverModule } from '@angular-mdl/popover';
import { MdlSelectModule } from '@angular-mdl/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';
import { CesiumMapComponent } from './cesium-map/cesium-map.component';
import { ProjectlogoComponent } from './projectlogo/projectlogo.component';
import { MapsLayerComponent } from './map-layer/maps-layer.component';
import { MenuComponent } from './menu/menu.component';
import { LayerSelectorComponent } from './layer-selector/layer-selector.component';
import { RegisLayoutComponent } from './regis-layout/regis-layout.component';
import { AddLayerModalComponent } from './add-layer-modal/add-layer-modal.component';
import { UploadModelModalComponent } from './upload-model-modal/upload-model-modal.component';
import { RunComputeModalComponent } from './run-compute-modal/run-compute-modal.component';
import { ModelSelectorComponent } from './model-selector/model-selector.component';
import { SimulationSelectorComponent } from './simulation-selector/simulation-selector.component';
import { LayerStylerComponent } from './layer-styler/layer-styler.component';
import { LayerService } from './services/layer-service';

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
    UploadModelModalComponent,
    RunComputeModalComponent,
    ModelSelectorComponent,
    SimulationSelectorComponent,
    LayerStylerComponent
  ],
  imports: [
    MdlModule,
    MdlIconModule,
    MdlPopoverModule,
    MdlSelectModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularCesiumModule.forRoot()
  ],
  // entryComponents: [ AddLayerModalComponent ],
  providers: [LayerService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
