import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Librería que permite recibir datos enviados por páginas
import { DataService } from '../servicios/api-rest.service';

@Component({
  selector: 'app-arrendatario',
  templateUrl: './arrendatario.page.html',
  styleUrls: ['./arrendatario.page.scss'],
})
export class ArrendatarioPage implements OnInit {

  comentarios: any[] = []; // Array para almacenar los comentarios
  
  selectedSegment: string = 'mis-datos';//Inicializa el segmento que desea mostrar primero 

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Obtener los comentarios desde el servicio
    this.dataService.getComentarios().subscribe((data) => {
      this.comentarios = data; // Asignar los datos recibidos a comentarios
    });
  }

}
