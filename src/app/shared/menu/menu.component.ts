import { Component, OnInit } from '@angular/core';

export interface MenuItem {

  nombre: string;
  ruta: string
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [

    `
      li {

        cursor: pointer;
      }
    `
  ],
})
export class MenuComponent {

  public menu: MenuItem[] = [

    {
      nombre:'Barras',
      ruta: './graficas/barra',
    },

    {
      nombre:'Gráficas Dobles',
      ruta: './graficas/barra-doble',
    },

    {
      nombre:'Dona',
      ruta: './graficas/dona'
    },

    {
      nombre:'Dona Http',
      ruta:'./graficas/dona-http',
    },
  ];
};
