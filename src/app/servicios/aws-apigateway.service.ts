import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class AwsApigatewayService {

  url: string = "https://wt9nnjj9fh.execute-api.us-east-2.amazonaws.com/eva3-deploy"
  urlc: string = "https://vxas0vvl3f.execute-api.us-east-2.amazonaws.com/cliente-deploy"
  urlp: string = "https://e37oyht5w2.execute-api.us-east-2.amazonaws.com/producto-deploy"
  urle: string = "https://3arbq1l60e.execute-api.us-east-2.amazonaws.com/envio-deploy"

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.url)
  }

  postUser(nombre:string, email:string){
    var body = {nombre: nombre, email: email}
    return this.httpClient.post(this.url, body)
  }

  getClientes(){
    return this.httpClient.get(this.urlc)
  }

  postCliente(nombre:string, email:string, direccion:string){
    var body = {nombre: nombre, email: email, direccion: direccion}
    return this.httpClient.post(this.urlc, body)
  }

  getProductos(){
    return this.httpClient.get(this.urlp)
  }

  postProducto(nombre:string, valor:number, descripcion:string){
    var body = {nombre: nombre, valor: valor, descripcion: descripcion}
    return this.httpClient.post(this.urlp, body)
  }

  getEnvios(){
    return this.httpClient.get(this.urle)
  }

  postEnvio(tipo:string, costo:number){
    var body = {tipo: tipo, costo: costo}
    return this.httpClient.post(this.urle, body)
  }
}
