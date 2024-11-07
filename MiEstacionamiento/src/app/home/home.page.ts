import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Librería que permite recibir datos enviados por páginas


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
receivedUsername!: string; //variable que almacena localmente el dato enviado desde el login 

selectedSegment: string = 'mis-datos';//Inicializa el segmento que desea mostrar primero 

//Funcion que recibe el dato enviado de otra pagina html
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.receivedUsername = params['user'];
    });
  }

}
