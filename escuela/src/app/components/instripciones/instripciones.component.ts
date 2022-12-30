import { Component, OnInit } from '@angular/core';

// importrar modelo (de estudiantes) y servicio(de estudiantes).
import { Estudiantes } from 'src/app/models/Estudiantes';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-instripciones',
  templateUrl: './instripciones.component.html',
  styleUrls: ['./instripciones.component.css'],
  // decorador con el servicio en la propiedad providers.
  providers: [EstudiantesService]
})
export class InstripcionesComponent implements OnInit {
  public title: string
  public estudiantes: Estudiantes;

  constructor(private _estudiantesService: EstudiantesService) { 
    this.title = "Inscripciones de alumnos"
    this.estudiantes = new Estudiantes('', '', '', 2, '', '', '')
  }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    console.log(this.estudiantes)
  }

}
