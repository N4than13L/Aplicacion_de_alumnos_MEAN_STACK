import { Component, OnInit } from '@angular/core';
// importar el modelo, el sevicio y el archivo global. Con el activatedroute y el params
import { global } from 'src/app/services/global';
import { Estudiantes } from 'src/app/models/Estudiantes';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [EstudiantesService],
})
export class DetailComponent implements OnInit {
  public url: string;
  public estudiantes: Estudiantes;
  public confirm: boolean

  constructor(
    private _estudiantesService: EstudiantesService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = global.url;
    // this.estudiantes = [];
    this.estudiantes = new Estudiantes('', '', '', 0, '', '', '');
    this.confirm = false;
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

  borrar_alumno(id:any){
    this._estudiantesService.borrar_Alumno(id).subscribe(
      response =>{
        if(response.Alumno){
          this._router.navigate(['/registro'])
        }
      }, error =>{
        console.log(<any>error)
      }
    )
  }

  setConfirm(confirm:boolean){
    this.confirm = confirm
  }
}
