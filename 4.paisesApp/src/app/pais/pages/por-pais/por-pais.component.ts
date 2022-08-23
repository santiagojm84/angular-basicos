import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'}
  )
export class PorPaisComponent {
  hayError:boolean = false;
  paises: Country[] = [];
  mensajeError:string="";
  placeHolder:string = "Buscar País...";

  constructor(private paisService: PaisService) {}

  buscar(termino:string) {
    if (termino)
    {
      this.paisService.getPais(termino).subscribe(
        (paises) => 
        {
          this.paises = paises;
          this.paises.sort();
          this.hayError = false;
        },
        (err) =>{ 
          this.paises = [];
          this.mensajeError = `No se encontro Información del país ${termino}`;
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

  sugerir(termino:string)
  {
    this.hayError = false;
    //TODO Crear sugerencias
  }
}
