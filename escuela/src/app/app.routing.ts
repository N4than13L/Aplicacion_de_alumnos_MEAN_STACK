import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { HomeComponent } from "./components/home/home.component"
import { InstripcionesComponent } from "./components/instripciones/instripciones.component"
import { RegistroComponent } from "./components/registro/registro.component"
import { DetailComponent } from "./components/detail/detail.component"
import { EditComponent } from "./components/edit/edit.component"
import {    InstructorsComponent } from './components/instructors/instructors.component'

import { ErrorComponent } from "./components/error/error.component"

import { InstructorstecnichalComponent } from "./components/instructorstecnichal/instructorstecnichal.component"

const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'instripciones', component: InstripcionesComponent},
    {path: 'alumno-edicion/:id', component:EditComponent},
    {path:'alumno/:id', component: DetailComponent},
    {path: 'instructores', component: InstructorsComponent},
    {path: 'instructores-tecnical', component: InstructorstecnichalComponent},
    {path: "**", component: ErrorComponent }
]

export const appRoutingProvider: any[] = []
export const routes: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes)