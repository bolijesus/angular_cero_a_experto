import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService:PaisService){

  }

  buscar($event: string) {
    this.hayError = false;
    this.paisService.buscarCapital($event)
    .subscribe((paises:Country[])=>{
      this.paises = paises;
    },(error:HttpErrorResponse)=>{
      this.hayError = true;
      this.paises = [];
    });
  }

}
