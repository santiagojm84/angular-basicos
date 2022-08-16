import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`<h1>{{titulo}}</h1>
              <button (click)="cambioContador(-base)">- {{base}}</button>
            <span>{{numero}}</span>
            <button (click)="cambioContador(+base)">+ {{base}}</button>`
})
export class ContadorComponent
{
   titulo:string = 'Contador';
   numero:number = 0;
   base:number = 5;
   
   cambioContador(base:number)
   {
     this.numero += base;
   }   
}