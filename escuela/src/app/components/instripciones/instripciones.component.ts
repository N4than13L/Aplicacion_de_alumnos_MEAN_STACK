import { Component, OnInit } from '@angular/core';

// importrar modelo (de estudiantes) y servicio(de estudiantes).
import { Estudiantes } from 'src/app/models/Estudiantes';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { UploadService } from 'src/app/services/upload.service';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-instripciones',
  templateUrl: './instripciones.component.html',
  styleUrls: ['./instripciones.component.css'],
  // decorador con el servicio en la propiedad providers.
  providers: [EstudiantesService, UploadService],
})
export class InstripcionesComponent implements OnInit {
  public title: string;
  public estudiantes: Estudiantes;
  public status: string | any;
  public FilesToUpload: Array<File>;

  constructor(
    private _estudiantesService: EstudiantesService,
    private _uploadImage: UploadService
  ) {
    this.title = 'Inscripciones de alumnos';
    this.estudiantes = new Estudiantes('', '', '', 0, '', '', '');
    this.FilesToUpload = [];
  }

  ngOnInit(): void {}

  onSubmit(form: any) {
    console.log(this.estudiantes);
    /* se instancia el servicio con la funcion con su respectivo parametro y 
    con el metodo subscribe que recibe un la response y el error
    */

    //  subida de infomacion.
    this._estudiantesService.guardar_alumno(this.estudiantes).subscribe(
      (response) => {
        if (response.estudiantes) {
          // subida de imagenes.
          this._uploadImage
            .uploadImage(
              global.url + 'subir-image/' + response.estudiantes._id,
              [],
              this.FilesToUpload,
              'image'
            )
            .then((result: any) => {
              alert("Alumno inscrito")
              this.status = 'success';
              console.log(result);
              form.reset();
            });

        } else {
          alert("No se a podido inscribir el alumno")
          this.status = 'failed';
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  fileUpload(fileInput: any) {
    this.FilesToUpload = <Array<File>>fileInput.target.files;
  }
}
