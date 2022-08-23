import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'}
  )
export class PorPaisComponent {
  termino: string = '';
  hayError:boolean = false;
  paises: Country[] = [];
  mensajeError:string="";

  constructor(private paisService: PaisService) {}

  buscar() {
    if (this.termino)
    {
      this.paisService.getPais(this.termino).subscribe(
        (paises) => 
        {
          this.paises = paises;
          this.paises.sort();
          this.hayError = false;
        },
        (err) =>{ 
          this.paises = [];
          this.mensajeError = `No se encontro Información del país ${this.termino}`;
          this.hayError = true;
        }
      );
    }
    else
    {
      this.mensajeError = `No se ha ingresado información a consultar`;
      this.hayError = true;
    }
  }
}
