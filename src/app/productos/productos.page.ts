import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/servicios/aws-apigateway.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  nombre: string = ""
  valor: number = 0
  descripcion: string = ""

  constructor(private service: AwsApigatewayService) { }

  ngOnInit() {
    this.service.getProductos().forEach((d:any) =>{
      console.log(d.body)
    })
  }

  postProducto(){
    this.service.postProducto(this.nombre, this.valor, this.descripcion).subscribe((data) =>{
      console.log(data)
    })
  }
}
