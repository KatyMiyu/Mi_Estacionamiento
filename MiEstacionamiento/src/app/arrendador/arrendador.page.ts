import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Librería que permite recibir datos enviados por páginas
import { DataService } from '../servicios/api-rest.service';

@Component({
  selector: 'app-arrendador',
  templateUrl: './arrendador.page.html',
  styleUrls: ['./arrendador.page.scss'],
})
export class ArrendadorPage implements OnInit {
  
  estacionamientos: any[] = []; // Array para almacenar los comentarios
  
  selectedSegment: string = 'mis-datos';//Inicializa el segmento que desea mostrar primero 

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Obtener los comentarios desde el servicio
    this.dataService.getEstacionamientos().subscribe((data) => {
      this.estacionamientos = data;
    });
  }
}
