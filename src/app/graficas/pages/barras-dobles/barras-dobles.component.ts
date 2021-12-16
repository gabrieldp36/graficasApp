import { Component } from '@angular/core';

import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styles: [
  ]
})
export class BarrasDoblesComponent {

  productoData: ChartData = {

    labels: ['2017', '2018','2019','2020','2021'],

    datasets: [

      { 
        data: [ 210, 300, 400, 300, 100 ], 
        label: 'Autos',
        backgroundColor: 'rgba(48,227,221,0.2)',
        borderColor: 'rgba(48,227,221,1)',
        pointBackgroundColor: 'rgba(48,227,221,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(48,227,221,0.8)'
      
      },

      { 
        data: [ 250, 100, 80, 250, 150],
        label: 'Camionetas',
        backgroundColor: 'rgba(47,250,132,0.2)',
        borderColor: 'rgba(47,250,132,1)',
        pointBackgroundColor: 'rgba(47,250,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(47,250,132,0.8)'
      
      },

      { 
        data: [ 300, 500, 200, 100, 400 ], 
        label: 'Motos',
        backgroundColor: 'rgba(183,79,255,0.2)',
        borderColor: 'rgba(183,79,255,1)',
        pointBackgroundColor: 'rgba(183,79,255,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(183,79,255,0.8)'
      },
    ],
  };

  proveedoresData: ChartData = {

    labels: ['2021', '2022','2023','2024','2025'],

    datasets: [

      { data: [ 130, 200, 300, 400, 500 ], label: 'Vendedor A' },

      { data: [ 115, 250, 250, 450, 350 ], label: 'Vendedor B' },

      { data: [ 100, 280, 200, 350, 280 ], label: 'Vendedor C' },
    ],
  };
};
