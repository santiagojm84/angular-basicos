import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mensajeError: string = '';
  placeHolder: string = 'Buscar País...';
  termino: string = '';
  mostrarSugerencias:boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    if (termino) {
      this.paisService.getPais(termino).subscribe(
        (paises) => {
          this.paises = paises;
          this.paises.sort();
          this.hayError = false;
        },
        (err) => {
          this.paises = [];
          this.mensajeError = `No se encontro Información del país ${termino}`;
          this.hayError = true;
        }
      );
    } else {
      this.mensajeError = `No se ha ingresado información a consultar`;
      this.hayError = true;
    }
  }

  sugerir(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.getPais(termino).subscribe(
      (paises) => this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []
    );
  }

  buscarSugerido(termino:string)
  {
    this.buscar(termino);
  }
}
