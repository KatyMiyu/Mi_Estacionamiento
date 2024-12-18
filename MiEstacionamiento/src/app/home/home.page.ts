import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Librería que permite recibir datos enviados por páginas

//Importar iconos
import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
receivedUsername!: string; //variable que almacena localmente el dato enviado desde el login 

 

//Funcion que recibe el dato enviado de otra pagina html
  constructor(private router: ActivatedRoute) {
    addIcons({ heart, logoApple, settingsSharp, star });
  }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.receivedUsername = params['user'];
    });
  }

}
