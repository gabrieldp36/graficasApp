import { Component } from '@angular/core';

import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  public doughnutChartData: ChartData<'doughnut'> = {

    labels: [ 'Ventas en Línea', 'Ventas en Local', 'Ventas Telefónicas' ],

    datasets: [

      { 
        data: [ 350, 450, 100 ] , 
        backgroundColor:['rgba(48,227,221)', 'rgba(47,250,132)', 'rgba(183,79,255)'],
        hoverBackgroundColor: ['rgba(48,227,221)', 'rgba(47,250,132)', 'rgba(183,79,255)'],
        hoverBorderColor: ['rgba(48,227,221)', 'rgba(47,250,132)', 'rgba(183,79,255)'],
      },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

}
