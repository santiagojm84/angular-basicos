import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Alicia';
  valor: number = 10000;
  obj = { nombre: 'Daniela'};

  mostrarNombre()
  {
    console.log(this.nombre);
  }
}
