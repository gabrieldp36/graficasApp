import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) {};

  getUsuariosRedesSociales () {

    return this.http.get('https://json-server-graficasapp.onrender.com/grafica')
    .pipe(

      map( data => {

        const labels: string[] = Object.keys(data)

        const labelsTitleCase = labels.map( label => {

        let redSocial = label.split('-');

        redSocial = redSocial.map( redSocial => redSocial[0].toUpperCase() + redSocial.substring(1) );

          return redSocial.join('-');
        })
        
        const info: number[] = Object.values(data);

        return { labelsTitleCase, info };
      }),
    );
  };
};
