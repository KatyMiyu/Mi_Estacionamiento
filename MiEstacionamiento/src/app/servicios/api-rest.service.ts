import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import localData from '../../assets/db.json'; // Importación por defecto

// Define la interfaz para los comentarios
interface Comentario {
  id: number;
  usuario: string;
  estacionamiento: string;
  comentario: string;
  calificacion: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiRestService {
  private comentarios: Comentario[] = localData.comentarios; // Usar directamente los datos

  constructor(private http: HttpClient) {}

  getLocalComentarios() {
    return this.comentarios;
  }

  getComentariosFromApi() {
    return this.http.get('http://tuservidor.com/api/comentarios');
  }
}
