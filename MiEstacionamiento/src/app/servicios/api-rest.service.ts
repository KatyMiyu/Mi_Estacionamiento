import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import localData from 'db.json'; // Importación por defecto
import { Observable } from 'rxjs';


// Define la interfaz para los comentarios
interface Comentario {
  id: number;
  estacionamiento: string;
  comentario: string;
  calificacion: number;
}

// Define la interfaz para los estacionamientos
interface Estacionamiento {
  id: number;
  nombre: string;
  direccion: string;
  cantidad_disponible: number;
  horario: string;
  tarifa_por_hora: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private comentariosUrl = 'http://localhost:3000/comentarios'; // URL de la API para comentarios
  private estacionamientosUrl = 'http://localhost:3000/estacionamientos'; // URL de la API para estacionamientos

  constructor(private http: HttpClient) {}

  // Método para obtener los comentarios desde la API
  getComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.comentariosUrl);
  }

  // Método para obtener los estacionamientos desde la API
  getEstacionamientos(): Observable<Estacionamiento[]> {
    return this.http.get<Estacionamiento[]>(this.estacionamientosUrl);
  }

  addEstacionamiento(estacionamiento: Estacionamiento): Observable<Estacionamiento> {
    return this.http.post<Estacionamiento>(this.estacionamientosUrl, estacionamiento);
  }

  deleteEstacionamiento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.estacionamientosUrl}/${id}`);
  }
}

