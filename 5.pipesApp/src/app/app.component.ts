import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Agustin Jaramillo Guevara';
  valor:number = 10000;
  obj = 
  {
    nombre: 'Pepito'
  }

  mostrarNombre(){
    console.log(this.nombre);
  }
}
