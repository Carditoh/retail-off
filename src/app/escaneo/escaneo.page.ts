import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'; 
import { DatalocalService } from 'src/app/servicios/datalocal.service';

@Component({
  selector: 'app-escaneo',
  templateUrl: './escaneo.page.html',
  styleUrls: ['./escaneo.page.scss'],
})
export class EscaneoPage implements OnInit {

  constructor(private scanner: BarcodeScanner, private service: DatalocalService) { }

  ngOnInit() {
  }

  scan(){
    this.scanner.scan().then(data =>{
      if(!data.cancelled)
        this.service.guardar(data.format, data.text)
    })
    .catch(err => {
      this.service.guardar('QRCode', 'geo: -1, 1')
    })
  }
}
