import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { HomeComponent } from "./components/home/home.component"
import { InstripcionesComponent } from "./components/instripciones/instripciones.component"
import { RegistroComponent } from "./components/registro/registro.component"
import { DetailComponent } from "./components/detail/detail.component"


const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'instripciones', component: InstripcionesComponent},
    {path:'alumno/:id', component: DetailComponent}  
]

export const appRoutingProvider: any[] = []
export const routes: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes)