import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/servicios/aws-apigateway.service';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.page.html',
  styleUrls: ['./aws.page.scss'],
})
export class AwsPage implements OnInit {

  nombre: string = ""
  email: string = ""

  constructor(private service: AwsApigatewayService) { }

  ngOnInit() {
    this.service.getUsers().forEach((d:any) =>{
      console.log(d.body)
    })
  }

  postUser(){
    this.service.postUser(this.nombre, this.email).subscribe((data) =>{
      console.log(data)
    })
  }
}
