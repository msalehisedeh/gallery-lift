import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryLiftModule } from '@sedeh/gallery-lift';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GalleryLiftModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
