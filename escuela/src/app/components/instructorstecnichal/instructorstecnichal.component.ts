import { Component, OnInit } from '@angular/core';
import { MaestrosService } from 'src/app/services/instructores.service';

@Component({
  selector: 'app-instructorstecnichal',
  templateUrl: './instructorstecnichal.component.html',
  styleUrls: ['./instructorstecnichal.component.css'],
  providers: [MaestrosService]

})
export class InstructorstecnichalComponent implements OnInit {
  public title: string
  public maestros: any


  constructor(private _maestrosService: MaestrosService) { 
    this.title = "Instructores técnicos"
  }

  ngOnInit(): void {
    this.obtener_Maestros_Tecnicos()
  }

  obtener_Maestros_Tecnicos(){
    this._maestrosService.obtener_Maestros_Tecnicos().subscribe(
      response => {
        this.maestros = response.data
        console.log(this.maestros)
      }, error =>{
        console.log(<any>error)
      }
    )
  }


}
