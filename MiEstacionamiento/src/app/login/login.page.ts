import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; //libreria que permite enviar datos enviados por paginas

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string =''; //La variable de usuario
  clave: string=''; // La variable de password
  errors: string[] = []; //array para almacenar mensajes de error
  constructor(private router: Router) {}

  //Validar el usuario y contraseña antes de navegar a home
  validarDatos() {
    this.errors = [];

    //Condiciones de validacion
    if (this.usuario.trim() ===''){
      this.errors.push('Usuario es obligatorio');
    }

    if (this.clave.trim() === ''){
      this.errors.push('Contraseña es obligatoria');
    }

    if (this.clave.length < 6){
      this.errors.push('La contrasaeña debe contener más de 6 carácteres')
    }

    //Si no hay errores, debe navegar al home
    if (this.errors.length === 0) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          user: this.usuario, //envio dato del input usuario
        },
      };
      this.router.navigate(['home'], navigationExtras); //Navega a home y envia el dato del input al Usuario
    }
    }



    ngOnInit() {
    }

  }






  


