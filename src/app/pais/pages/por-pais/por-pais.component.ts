import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor:pointer
    }
  `]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises: Country[]) => {
        this.paises = paises;
        console.log(paises);

      }, (error: HttpErrorResponse) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias($termino: string) {
    this.paisService.buscarPais($termino)
    .subscribe(
      paises => this.paisesSugeridos = paises.splice(0,3),
      error => this.paisesSugeridos = []
    )
  }

}
