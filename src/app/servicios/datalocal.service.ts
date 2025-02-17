import { Injectable } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import { Registro } from '../modelos/registro.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  guardados: Registro[] = []

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private appBrowser: InAppBrowser
  ) {
    this.cargaStorage()
   }

   async cargaStorage() {
    this.storage.create()
    this.guardados = (await this.storage.get('registro') || [])
   }
   async guardar(format: string, text:string){
    await this.cargaStorage()
    
    const nuevo = new Registro(format, text)

    this.guardados.unshift(nuevo)

    this.storage.set('registro', this.guardados)

    this.abrir(nuevo)
  }

  abrir(registro: Registro){
    this.navCtrl.navigateForward('/historial')

    switch(registro.type){
      case 'http':
        this.appBrowser.create(registro.text, '_system')
        break
      
      case 'geo':
        this.navCtrl.navigateForward('/mapa?geo=${registro.text}')
        break
    }
  }
}
