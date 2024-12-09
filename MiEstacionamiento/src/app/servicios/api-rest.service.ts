import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import localData from 'db.json'; // Importación por defecto
import { Observable } from 'rxjs';

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
export class DataService {
  private apiUrl = 'http://localhost:3000/comentarios'; // URL de la API para comentarios

  constructor(private http: HttpClient) {}

  // Método para obtener los comentarios desde la API
  getComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.apiUrl);
  }
}
