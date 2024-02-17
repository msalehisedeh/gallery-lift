import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryViewComponent } from './gallery-view.component';
import { GalleryLiftComponent } from './gallery-lift.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GalleryLiftComponent,
    GalleryViewComponent
  ],
  exports: [
    GalleryLiftComponent,
    GalleryViewComponent
  ],
  entryComponents: [
    GalleryViewComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GalleryLiftModule {}
