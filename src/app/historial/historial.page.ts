import { Component, OnInit } from '@angular/core';

import { DatalocalService } from 'src/app/servicios/datalocal.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor(protected service: DatalocalService) { }

  ngOnInit() {
  }

  abrir(registro:any){
    this.service.abrir(registro)
  }
}
