import { Component } from '@angular/core';
import { Personaje } from 'src/model/personaje';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = { nombre: 'Rochi', poder: 0 };
  constructor(){}
}
