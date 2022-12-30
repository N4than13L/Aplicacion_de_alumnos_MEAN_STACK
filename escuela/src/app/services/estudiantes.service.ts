import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs" 
import { Estudiantes } from "../models/Estudiantes";
import { global } from "./global";

@Injectable()
export class EstudiantesService {
    public url: string;

    constructor(private httpClient: HttpClient){
        this.url = global.url;
    }

    testService (){
        return "Probando servicio con angular";
    }
    
}