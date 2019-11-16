import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as configFases from './../../../../../../../../configs/config';
import { ProyectosService } from 'src/app/services/proyectos.service';


@Component({
  selector: 'app-fase',
  templateUrl: './fase.component.html',
  styles: []
})
export class FaseComponent implements OnInit {

  idProyecto: String = '';

  fase: String = '';

  confFase: any = null;

  proyecto: any = null;

  numFase: Number = null;

  constructor(private _activatedRoute: ActivatedRoute, private proyectosservice: ProyectosService) { 
    // this.proyecto = proyectosservice.proyectoActual;
    _activatedRoute.parent.parent.params.subscribe (params=>{
      this.idProyecto = params.idProyecto;
    })
    _activatedRoute.params
      .subscribe(params=>{
        this.fase = this.fase = params.fase;
        this.numFase = Number(this.fase);
        switch (this.fase) {
          case '0':{
            this.confFase = configFases.confFaseCreacion;
          }break;
          case '1':{
            this.confFase = configFases.confFaseRecopilacion;
          }break;
          case '2':{
            this.confFase = configFases.confFaseAnalisis;
          }break;
          case '3':{
            this.confFase = configFases.confFaseAprobacion;
          }break;
          case '4':{
            this.confFase = configFases.confFasePlanificacion;
          }break;
          case '5':{
            this.confFase = configFases.confFaseEspecificacion;
          }break;
          case '6':{
            this.confFase = configFases.confFaseDesarrollo;
          }break;
          case '7':{
            this.confFase = configFases.confFaseValidacionInterna;
          }break;
          case '8':{
            this.confFase = configFases.confFaseValidacionCalidad;
          }break;
          case '9':{
            this.confFase = configFases.confFaseFabPrimeraUnidad;
          }break;
          case '10':{
            this.confFase = configFases.confFaseValidacionPrimeraUnidad;
          }break;

        }
      })
  }

  ngOnInit() {
  }

}
