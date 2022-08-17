import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from 'src/model/personaje';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
  }
}
