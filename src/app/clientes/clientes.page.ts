import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/servicios/aws-apigateway.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  nombre: string = ""
  email: string = ""
  direccion: string = ""

  constructor(private service: AwsApigatewayService) { }

  ngOnInit() {
    this.service.getClientes().forEach((d:any) =>{
      console.log(d.body)
    })
  }

  postCliente(){
    this.service.postCliente(this.nombre, this.email, this.direccion).subscribe((data) =>{
      console.log(data)
    })
  }
}
