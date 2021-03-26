import { Component } from '@angular/core';
import { GeolocationService } from './servers/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'geolocalizacion';

  constructor(private coords:GeolocationService){

  }

  ngOnInit(): void {
   this.getCoords();
   
  }

  getCoords() {
    /*
    * Ejecutamos el metodo getGeolocation del service geolocation
    * para obtener las coordenas de la ubicacion actual
    */
    this.coords.getGeolocation().then(pos => {     
      console.log('Latitude: ', pos.latitude, "Longitude: ", pos.longitude);
    });
  }

}
