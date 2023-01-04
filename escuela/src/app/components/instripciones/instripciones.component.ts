import { Component, OnInit } from '@angular/core';

// importrar modelo (de estudiantes) y servicio(de estudiantes).
import { Estudiantes } from 'src/app/models/Estudiantes';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-instripciones',
  templateUrl: './instripciones.component.html',
  styleUrls: ['./instripciones.component.css'],
  // decorador con el servicio en la propiedad providers.
  providers: [EstudiantesService],
})
export class InstripcionesComponent implements OnInit {
  public title: string;
  public estudiantes: Estudiantes;
  public status: String

  constructor(private _estudiantesService: EstudiantesService) {
    this.status = "";
    this.title = 'Inscripciones de alumnos';
    this.estudiantes = new Estudiantes('', '', '', 0, '', '', '');
  }

  ngOnInit(): void {}

  onSubmit(form: any) {
    console.log(this.estudiantes);
    /* se instancia el servicio con la funcion con su respectivo parametro y 
    con el metodo subscribe que recibe un la response y el error
    */
    this._estudiantesService.guardar_alumno(this.estudiantes).subscribe(
      (response) => {
        if (response.estudiantes) {
          this.status = "success"
        } else {
          this.status = "failed";
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
