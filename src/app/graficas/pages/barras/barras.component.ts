import { Component, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {

    responsive: true,

    // We use these empty structures as placeholders for dynamic theming.

    scales: {

      x: {},
      y: {
        min: 0
      }
    },
    
    plugins: {

      legend: {

        display: true,
      },

      datalabels: {

        anchor: 'end',
        align: 'end',
      },
    },
  };

  public barChartType: ChartType = 'bar';

  public barChartPlugins = [

    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {

    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],

    datasets: [

      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },

      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' },

      { data: [ 12, 8, 38, 36, 55, 89, 46 ], label: 'Series C' },
    ],
  };

  public actualizar(): void {

    // Only Change 3 values

    this.barChartData.datasets.forEach ( data => {

      data.data = [

        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),

      ];
    });

    this.chart?.update();
  };
};

