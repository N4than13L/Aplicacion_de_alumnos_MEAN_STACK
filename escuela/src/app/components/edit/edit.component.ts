import { Component, OnInit } from '@angular/core';
// importrar modelo (de estudiantes) y servicio(de estudiantes).
import { Estudiantes } from 'src/app/models/Estudiantes';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { UploadService } from 'src/app/services/upload.service';
import { global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../instripciones/instripciones.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [EstudiantesService, UploadService],
})
export class EditComponent implements OnInit {

  public title: string;
  public estudiantes: Estudiantes;
  public status: string | any;
  public FilesToUpload: Array<File>;
  public estudiante_almacenado: any
  public url: string

  constructor(
    private _estudiantesService: EstudiantesService,
    private _uploadImage: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.title = 'Edición de registro alumno';
    this.estudiantes = new Estudiantes('', '', '', 0, '', '', '');
    this.FilesToUpload = [];
    this.url = global.url
  }

  ngOnInit(): void {
    // funcionalidad para obtener el parametro id por la url.
    this._route.params.subscribe((params) => {
      let id = params['id'];
      this.obtener_alumno(id);
    });
  }

  obtener_alumno(id: any) {
    // instanciar el servicio de estudiantes para sacar solo un estudiante por la url
    this._estudiantesService.obtener_Alumno(id).subscribe(
      (response) => {
        console.log(response);
        if (response.Alumno) {
          this.estudiantes = response.Alumno;
          // console.log(this.estudiantes);
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form: any) {
    console.log(this.estudiantes);
    /* se instancia el servicio con la funcion con su respectivo parametro y 
    con el metodo subscribe que recibe un la response y el error
    */

    //  subida de infomacion.
this._estudiantesService.actualizar_Alumno(this.estudiantes).subscribe(
      (response) => {
        if (response.Alumno) {

          // subida de imagenes.
          if(this.FilesToUpload){

            this._uploadImage
            .uploadImage(
              global.url + 'subir-image/' + response.Alumno._id,
              [],
              this.FilesToUpload,
              'image'
            )
            .then((result: any) => {
              // alert("Alumno inscrito")
              this.estudiante_almacenado = result.Alumno
              this.status = 'success';
            });
          }else{
            this.estudiante_almacenado = response.Alumno
              this.status = 'success';
          }

        } else {
          // alert("No se a podido inscribir el alumno")
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
