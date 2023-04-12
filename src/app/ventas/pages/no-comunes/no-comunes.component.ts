import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
  //i18nSelect
  nombre:string = 'Susana';
  genero:string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nPlural
  clientes:string[] = ['Andres','Maria','Pedro','Juan','Carla','Monica','Ancheloti']
  clientesMapa = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  cambiarPersona(){
    if (this.nombre =='Susana') {
      this.nombre = 'Fernando';
      this.genero = 'masculino';
    }else{
      this.nombre = 'Susana';
      this.genero = 'femenino';
    }
  }

  eliminarCliente(){
    this.clientes.pop();
  }
}
