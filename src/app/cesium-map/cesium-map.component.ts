import { AfterViewInit, Component, OnInit } from '@angular/core';

import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { AcNotification, AcMapComponent } from 'angular-cesium';

@Component({
  selector: 'app-cesium-map',
  templateUrl: './cesium-map.component.html',
  styleUrls: ['./cesium-map.component.css']
})
export class CesiumMapComponent implements AfterViewInit, OnInit {
  private planes$: ConnectableObservable<AcNotification>[];

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
