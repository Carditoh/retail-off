import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  username: string = "";
  password: string = "";
  //cpassword: string = "";

  constructor(
    private authService: AuthService,
    /*
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    */
    public router: Router
  ) { }

  ngOnInit() {
  }

  registrar(e:Event){
    this.authService.register(this.username, this.password)
    .then((res:any)=>{
      this.router.navigate(['/login'])
    })
    .catch((err:any)=>{
      alert('error al agregar nuevo usuario: ' + err)
    })
  }

  /*
  async registrar(){
    const { username, password, cpassword } = this;
    if (password !== cpassword) {
      this.showAlert("Error", "Las contraseñas no coinciden ");
    } else {
      try {
        const res = await this.afAuth.createUserWithEmailAndPassword(username, password);
        this.showAlert("Usuario Registrado", "Bienvenido " + username);
        this.router.navigate(['/logeado']);
      } catch(err:any) {
        console.dir(err);
        this.showAlert("Error", err.message);
      }
    }
  }

  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    });
    await alert.present();
  }
  */
}
