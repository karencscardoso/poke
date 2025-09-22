import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeCardComponent } from './shared/poke-card/poke-card.component';
import { HomeComponent } from './pages/home/home.component';
import { DialogComponent } from './shared/modals/dialog/dialog.component';
import { TipoComponent } from './shared/tipo/tipo.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
