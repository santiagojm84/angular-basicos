import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/model/personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7000,
    },
    {
      nombre: 'Yamcha',
      poder: 2000,
    },
  ];

  nuevo: Personaje = { nombre: 'Rochi', poder: 0 };

  constructor() {}

  ngOnInit(): void {}

  agregarNuevoPersonaje(argumento:Personaje)
  {
    console.log(argumento);
    this.personajes.push(argumento);    
  }
}
