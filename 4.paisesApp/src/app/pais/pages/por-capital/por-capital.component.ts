import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  hayError:boolean = false;
  paises: Country[] = [];
  mensajeError:string="";
  placeHolder:string = "Buscar Capital...";

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string) {
    if (termino)
    {
      this.paisService.getCapital(termino).subscribe(
        (paises) => 
        {
          this.paises = paises;
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

}
