import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProvider } from './app.routing';
import {routes} from "./app.routing"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InstripcionesComponent } from './components/instripciones/instripciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    InstripcionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes
  ],
  providers: [
    appRoutingProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
