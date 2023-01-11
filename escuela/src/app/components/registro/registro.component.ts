import { Component, OnInit } from '@angular/core';
// 1. importar el servicio, modelo y la url.
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { Estudiantes } from 'src/app/models/Estudiantes';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  // 2. cargar el provider.
  providers: [EstudiantesService]
})
export class RegistroComponent implements OnInit {
  public title: string;
  // 3. cargar el servicio de url e instanciar una propiedad de EstudianteService en el constructor. 
  public url: string
  public estudiantes: Estudiantes[] 

  constructor(private _estudiantesService: EstudiantesService) { 
    this.title = "Alumnos inscritos.";
    this.url = global.url;
    this.estudiantes= [];
  }

  ngOnInit(): void {
    this.obtener_Alumnos();
  }

  // 4. Crear la funcion para sacar los alumnos y se carga en el ngOnInit.
  obtener_Alumnos(){
    this._estudiantesService.obtener_Alumno().subscribe(
      response =>{
        // console.log(response);
        if (response.alumnos) {
          this.estudiantes = response.alumnos
        }
      }, error =>{
        console.log(error)
      }
    )
  }


}
