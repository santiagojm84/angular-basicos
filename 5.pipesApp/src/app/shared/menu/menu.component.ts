import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Básicos',
            icon: 'pi pi-briefcase',
            routerLink: 'basicos',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros',
          },
          {
            label: 'NoComunes',
            icon: 'pi pi-eye',
            routerLink: 'no-comunes',
          },
          {
            label: 'Ordenar',
            icon: 'pi pi-inbox',
            routerLink: 'ordenar',
          },
        ],
      },
    ];
  }
}
