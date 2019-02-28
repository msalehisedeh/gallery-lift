import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryLiftComponent } from './gallery-lift.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GalleryLiftComponent
  ],
  exports: [
    GalleryLiftComponent
  ],
  entryComponents: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GalleryLiftModule {}
