import { ContentChild, Renderer2, ElementRef, Component, ViewEncapsulation, AfterContentInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { MdlLayoutComponent, MdlLayoutDrawerComponent, MdlScreenSizeService } from '@angular-mdl/core';

@Component({
  selector: 'app-regis-layout',
  template: `
  <div class="mdl-layout__container">
   <div class="mdl-layout is-upgraded"
        [ngClass]="{
        'is-small-screen': isSmallScreen,
        'mdl-layout--fixed-drawer': isFixedDrawer,
        'mdl-layout--fixed-header': isFixedHeader,
        'mdl-layout--fixed-tabs': 'tabs.toArray().length > 0'
        }">
      <ng-content select="mdl-layout-header"></ng-content>
      <ng-content select="mdl-layout-drawer"></ng-content>
      <div class="mdl-layout__drawer-button" (click)="toggleDrawer()">
         <mdl-icon>&#xE5D2;</mdl-icon>
      </div>
      <ng-content select="mdl-layout-content"></ng-content>
  </div>
`,
  providers: [MdlLayoutComponent, MdlScreenSizeService],
  styleUrls: ['./regis-layout.component.css'],
  exportAs: 'regisLayout',
  encapsulation: ViewEncapsulation.None
})

export class RegisLayoutComponent extends MdlLayoutComponent implements AfterContentInit {
  @ContentChild('menuDrawer') public drawer: MdlLayoutDrawerComponent;

  public isDrawerVisible = false;

  constructor(renderer: Renderer2, evm: EventManager, el: ElementRef, screenSizeService: MdlScreenSizeService) {
    super(renderer, evm, el, screenSizeService);
  }

  public ngAfterContentInit() {
    let savedDrawer;

    // We've explicitly saved the drawer so we know it's the correct one but the super wants it to be a direct
    // child (which it is now not because of this extended class) so we have to save and restore it after calling the super.
    if (this.drawer) {
      savedDrawer = this.drawer;
    }
    super.ngAfterContentInit();

    if (savedDrawer) {
      this.drawer = savedDrawer;
    }
  }
}
