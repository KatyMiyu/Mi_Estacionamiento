import { Component } from '@angular/core';
//Agregar el modulo del router
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //Modificación del constructor para que se inicie en la pagina donde esta la animación
  constructor(//public router: Router
    ) 
    {
    //this.initializeApp();
  //}
  //initializeApp(){
    //this.router.navigateByUrl('intro')
  };
}


