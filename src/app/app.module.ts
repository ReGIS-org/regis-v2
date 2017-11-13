import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MdlModule, MdlIconModule } from '@angular-mdl/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';
import { CesiumMapComponent } from './cesium-map/cesium-map.component';
import { ProjectlogoComponent } from './projectlogo/projectlogo.component';
import { MapsLayerComponent } from './map-layer/maps-layer.component';
import { MenuComponent } from './menu/menu.component';
import { LayerSelectorComponent } from './layer-selector/layer-selector.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    CesiumMapComponent,
    ProjectlogoComponent,
    MapsLayerComponent,
    MenuComponent,
    LayerSelectorComponent
  ],
  imports: [
    MdlModule,
    MdlIconModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularCesiumModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
