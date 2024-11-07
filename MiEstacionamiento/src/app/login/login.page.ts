import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; //Librería que permite enviar datos enviados por páginas
//Importar Auth
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = ''; // La variable de usuario
  clave: string = ''; // La variable de password
  errors: string[] = []; // Array para almacenar mensajes de error
  
  constructor(private router: Router, private authService: AuthService) {} //Inicializar servicio auth
 
 // Llama al método de autenticación con correo y contraseña
 async login() {
  if (this.usuario && this.clave) {
    const isAuthenticated = await this.authService.signIn(this.usuario, this.clave);
    
    // Solo navegamos si la autenticación fue exitosa
    if (isAuthenticated) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          user: this.usuario, // Envío dato del input Usuario
        },
      };
      this.router.navigate(['home'], navigationExtras); // Navega a Home y envía el dato del input Usuario
    }
  } else {
    alert('Por favor, ingresa tu correo y contraseña.');
  }
  }
 
  ngOnInit() {
  }

}





  


