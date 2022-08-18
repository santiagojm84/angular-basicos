import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get Resultados()
  {
    return this.gifService.Resultados;
  }

  constructor(private gifService:GifsService) { }
}
