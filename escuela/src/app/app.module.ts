import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Apartado de rutas y el privider que va en el de providers.
import { appRoutingProvider } from './app.routing';
import { routes } from './app.routing';

// importaciones de modulos que van en el apartado de imports.
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InstripcionesComponent } from './components/instripciones/instripciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    InstripcionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
    HttpClientModule,
    FormsModule,
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
