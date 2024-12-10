import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/servicios/aws-apigateway.service';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.page.html',
  styleUrls: ['./envios.page.scss'],
})
export class EnviosPage implements OnInit {
  tipo: string = ""
  costo: number = 0

  constructor(private service: AwsApigatewayService) { }

  ngOnInit() {
    this.service.getEnvios().forEach((d:any) =>{
      console.log(d.body)
    })
  }

  postEnvio(){
    this.service.postEnvio(this.tipo, this.costo).subscribe((data) =>{
      console.log(data)
    })
  }
}
