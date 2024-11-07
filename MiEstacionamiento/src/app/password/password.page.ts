import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; //libreria que permite enviar datos enviados por paginas

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  name: string ='';//variable nombre usuario
  email: string = '';//variable para correo
  password: string =''//variable para la contraseña
  password2: string =''//variable para la contraseña
  errors: string[] = [];//array para almacenar el error

  constructor(private router: Router) { }

  //Validar datos
  validarDatos(){
    this.errors = [];

    //Condiciones
    if (this.name.trim()===''){
      this.errors.push('Nombre es obligatorio');
    }
    if (this.password.trim()===''){
      this.errors.push('Contraseña obligatoria')
    }
    if(this.password.length<6){
      this.errors.push('La contraseña debe tener mas de 6 carácteres')
    }
    if (this.password2.trim()===''){
      this.errors.push('Contraseña obligatoria')
    }
    if(this.password2.length<6){
      this.errors.push('La contraseña debe tener mas de 6 carácteres')
    }

    //Si no hay errores se guardan los datos y se regresa al login

    if (this.errors.length === 0) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          user: this.name, //envio dato del input usuario
        },
      };
      this.router.navigate(['login'], navigationExtras); //Navega a login y envia el dato del input al Usuario
    }
    



  }

  ngOnInit() {
  }

}
