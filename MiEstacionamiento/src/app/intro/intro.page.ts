import { Component, OnInit } from '@angular/core';
//Agregar el modulo del router
import {Router} from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  //Se modifica el constructor para agregar la animación
  constructor(public router:Router) { 
    
    setTimeout(()=>{
      this.router.navigateByUrl('login')
    },2000);//2000= 2 seg
  }

  ngOnInit() {
  }

}
