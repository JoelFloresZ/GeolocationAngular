import { Position } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }


  //Metodo que nos permite obtener la latitud y longitud  de la ubicacion actual
  getGeolocation():Promise<any> {
    return  new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({
          longitude: resp.coords.longitude, latitude: resp.coords.latitude 
        });
      },
      err => {
        reject(err);
      })
    })
  }

}
