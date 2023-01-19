import { Component, OnInit } from '@angular/core';
import { MaestrosService } from 'src/app/services/instructores.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css'],
  providers: [MaestrosService]
})
export class InstructorsComponent implements OnInit {
  public title: string
  public maestros: any

  constructor(private _maestrosService: MaestrosService) {
    this.title = "Instructores"
   }

  ngOnInit(): void {
    this.obtener_Maestros();
  }

  obtener_Maestros(){
    this._maestrosService.obtener_Maestros().subscribe(
      response => {
        this.maestros = response.data
        console.log(this.maestros)
      }, error =>{
        console.log(<any>error)
      }
    )
  }

}
