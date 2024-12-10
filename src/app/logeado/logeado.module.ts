import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogeadoPageRoutingModule } from './logeado-routing.module';

import { LogeadoPage } from './logeado.page';

import { MenuPageModule } from '../menu/menu.module';

const routes: Routes = [
  {
    path: '',
    component: LogeadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogeadoPageRoutingModule,
    RouterModule.forChild(routes),
    MenuPageModule
  ],
  declarations: [LogeadoPage]
})
export class LogeadoPageModule {}
