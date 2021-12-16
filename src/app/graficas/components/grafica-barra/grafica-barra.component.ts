import { Component, ViewChild, Input, OnInit } from '@angular/core';

import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() linea: boolean = false;

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

    DataLabelsPlugin,
  ];

  @Input() public barChartData: ChartData = {

    labels: [],

    datasets: [],
  };

  ngOnInit(): void {
    
    if( this.linea ) {

      this.barChartType = 'line';
    }; 
  };

  public actualizar(): void {

    // Only Change 3 values

    this.barChartData.datasets.forEach ( data => {

      data.data = [

        Math.round(Math.random() * 500),
        Math.round(Math.random() * 500),
        Math.round(Math.random() * 500),
        Math.round(Math.random() * 500),
        Math.round(Math.random() * 500),
        Math.round(Math.random() * 500),
        Math.round(Math.random() * 500),

      ];
    });

    this.chart?.update();
  };
};
