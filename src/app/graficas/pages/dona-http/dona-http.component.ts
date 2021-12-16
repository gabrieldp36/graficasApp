import { Component, OnInit } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  
  public doughnutChartData: ChartData<'doughnut'> = {

    labels: [],

    datasets: [ { data: [] } ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) {};

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesSociales()
    .subscribe( ( { labelsTitleCase, info } ) => {
      
      this.doughnutChartData = {

        labels: labelsTitleCase,

        datasets: [
          { 
            data: info, 
            backgroundColor:['rgba(96,235,52)', 'rgba(245,173,66)', 'rgba(70,228,242)', 'rgba(171,75,219)', 'rgba(219,80,80)'],
            hoverBackgroundColor: ['rgba(96,235,52)', 'rgba(245,173,66)', 'rgba(70,228,242)', 'rgba(171,75,219)', 'rgba(219,80,80)'],
            hoverBorderColor: ['rgba(96,235,52)', 'rgba(245,173,66)', 'rgba(70,228,242)', 'rgba(171,75,219)', 'rgba(219,80,80)'],
          },
        ],
      };
    });
  };
};
