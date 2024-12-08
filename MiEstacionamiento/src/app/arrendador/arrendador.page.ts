import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../servicios/api-rest.service';

@Component({
  selector: 'app-arrendador',
  templateUrl: './arrendador.page.html',
  styleUrls: ['./arrendador.page.scss'],
})
export class ArrendadorPage implements OnInit {
  comentarios: any[] = [];

  constructor(private apiRestService: ApiRestService) {}

  ngOnInit() {
    // Obtener los comentarios desde el servicio
    this.comentarios = this.apiRestService.getLocalComentarios();
  }
}
