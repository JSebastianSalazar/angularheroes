import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routes
import {APP_ROUTING} from './app.routes'
// services

// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import {HeroesServices} from './services/heroes.services';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearhComponent } from './components/searh/searh.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearhComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
