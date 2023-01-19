// 1. Se importan las dependencias de angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// 2. Se importan el modelo y el archivo global.
import { Estudiantes } from '../models/Estudiantes';
import { global } from './global';

// 3. Se escribe el decorador y se exporta la clase con el constructor
@Injectable()
export class MaestrosService {
  public url_maestros: string;
  public url_maestros_tecnicos: string;

  constructor(private _http: HttpClient) {
    this.url_maestros = global.url_maestros;
    this.url_maestros_tecnicos = global.url_maestros_tecnicos;
  }

  // 4. se crean los metodos
  testService() {
    return 'Probando servicio con angular';
  }

  obtener_Maestros(): Observable<any> {
    // 1. declarar los headers.
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // 2. se devuelve el resultado
    return this._http.get(this.url_maestros, {
      headers: headers,
    });
  }

  obtener_Maestros_Tecnicos(): Observable<any> {
    // 1. declarar los headers.
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // 2. se devuelve el resultado
    return this._http.get(this.url_maestros_tecnicos, {
      headers: headers,
    });
  }


}
