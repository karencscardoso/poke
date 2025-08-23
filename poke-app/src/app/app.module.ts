import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeCardComponent } from './shared/poke-card/poke-card.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PokemonService } from './services/pokemon.service';
import { DialogComponent } from './dialog/dialog.component';
import { TipoComponent } from './shared/tipo/tipo.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: []
})
export class AppModule { }
