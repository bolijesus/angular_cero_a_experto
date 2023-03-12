import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeCompoenet } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeCompoenet,
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
