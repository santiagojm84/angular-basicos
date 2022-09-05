import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  
{
  nombre:string = 'Carlos';
  genero:string = 'masculino';
  cantidad: number = 1;

  invitacionMapa = 
  {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  persona = 
  {
    Nombre: 'Camilo',
    Edad: 32,
    Genero: 'M'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Juan','Mariana'];
  clientesMapa = {'=0':'No tenemos ningun cliente esperando',
                  '=1':`tenemos ${this.clientes.length} cliente esperando`,
                  'other': `tenemos ${this.clientes.length} clientes esperando`}


  CambiarPersona()
  {
    this.nombre = 'Mariana';
    this.genero = 'femenino';
  }

  BorrarCliente()
  {
    this.clientes.pop();
    console.log(this.clientes);
  }
}
