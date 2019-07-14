import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ResaltarDirective } from './directives/resaltar.directive';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { ResidentesComponent } from './residentes/residentes.component';
import { Angular2SwapiModule } from 'angular2-swapi';
import { DataTablesModule } from 'angular-datatables';



const appRoutes: Routes = [
  {path:'', component: PersonajesComponent},
  {path:'listado', component: ListadoComponent},
  {path:'personajes', component: PersonajesComponent},
  {path:'personaje/:nombre', component: PersonajeComponent},
  {path:'residentes', component: ResidentesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ListadoComponent,
    PersonajesComponent,
    PersonajeComponent,
    ResidentesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    Angular2SwapiModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
