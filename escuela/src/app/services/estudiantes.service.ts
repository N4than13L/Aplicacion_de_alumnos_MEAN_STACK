// 1. Se importan las dependencias de angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// 2. Se importan el modelo y el archivo global.
import { Estudiantes } from '../models/Estudiantes';
import { global } from './global';

// 3. Se escribe el decorador y se exporta la clase con el constructor
@Injectable()
export class EstudiantesService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = global.url;
  }

  // 4. se crean los metodos
  testService() {
    return 'Probando servicio con angular';
  }

  guardar_alumno(estudiante: Estudiantes): Observable<any> {
    // 1. se recoge los parametros y las cabeceras.
    let params = JSON.stringify(estudiante);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // 2. se da de alta en el api.
    //     instancia/metodo http/url/parametros/cabecera.
    return this._http.post(this.url + 'agregar-alumnos', params, {
      headers: headers,
    });
  }

  obtener_Alumno(): Observable<any>{
    // 1. declarar los headers.
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url+ "listado-de-alumnos", {headers: headers});
  }
}
