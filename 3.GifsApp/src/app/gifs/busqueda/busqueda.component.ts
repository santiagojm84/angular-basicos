import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifService:GifsService) { }

  ngOnInit(): void {
  }

  buscar(value:string)
  {
    const valor = this.txtBuscar.nativeElement.value;
    this.gifService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
