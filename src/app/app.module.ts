import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SharedModule } from './shared/modules/shared.module';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './pages/pokemon-page/card/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonPageComponent,
    HeaderComponent,
    PokemonCardComponent
    ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
