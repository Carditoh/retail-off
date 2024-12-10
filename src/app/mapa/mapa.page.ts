import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoiY2FyZG9oIiwiYSI6ImNsb2FnbngwcDBqNDkya3FjMXJ1b3Y2dXUifQ.a_lLBi3zp2HVKIhSE1D1Ww'
    const mapa = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [45,10],
      zoom: 10
    })
  }
}
