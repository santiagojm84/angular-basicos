import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
  nombre:string = 'Carlos';
  genero:string = 'masculino';

  invitacionMapa = 
  {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }
}
