import { Injectable } from "@angular/core";
import { Personaje } from "src/model/personaje";

@Injectable()
export class DBZService
{
    private _personajes: Personaje[] = [
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

    get personajes(): Personaje[]
    {
      return [...this._personajes];
    }  

    constructor() {
      console.log('Inicializado');
    }

    agregarPersonaje(personaje:Personaje)
    {
      this._personajes.push(personaje);
    }
}