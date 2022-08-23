import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  termino:string = "";
  @Input() placeHolder:string = "";
  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => 
      {
        console.log('Debouncer:', valor)
      });
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada()
  {
    this.debouncer.next(this.termino);
  }
}
