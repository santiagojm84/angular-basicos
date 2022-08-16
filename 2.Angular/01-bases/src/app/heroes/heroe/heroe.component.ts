import { Component } from "@angular/core";

 @Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
 })

export class HeroeComponent
{
   title:string = 'Titulo Componente Heroe';
   nombre:string = 'Ironman';
   edad:number = 33;

   get nombreCapitalizado()
   {
      return this.nombre.toUpperCase();
   }

   obtenerNombre():string
   {
      return `${this.nombre} - ${this.edad}`;
   }

   cambiarNombre(): void
   {
      this.nombre = 'SpiderMan';
   }

   cambiarEdad(): void
   {
      this.edad = 50;
   }
}