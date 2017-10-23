import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';
import { CesiumMapComponent } from './cesium-map/cesium-map.component';
import { ProjectlogoComponent } from './projectlogo/projectlogo.component';
import { MapsLayerComponent } from './map-layer/maps-layer.component';

@NgModule({
  declarations: [
    AppComponent,
    CesiumMapComponent,
    ProjectlogoComponent,
    MapsLayerComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
