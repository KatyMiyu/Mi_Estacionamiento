import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/api-rest.service';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.component.html',
  styleUrls: ['./api-rest.component.scss'],
})
export class ApiRestComponent implements OnInit {
  comentarios: any[] = []; // Lista de comentarios cargados
  newComentario: any = { id: 0, usuario: '', estacionamiento: '', comentario: '', calificacion: 0 }; // Nuevo comentario
  editingComentario: any | null = null; // Comentario en edición

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadComentarios();
  }

  // Cargar los comentarios desde el servicio
  loadComentarios() {
    this.dataService.getComentarios().subscribe(
      (data) => {
        this.comentarios = data; // Asigna los datos obtenidos al arreglo de comentarios
      },
      (error) => {
        console.error('Error al cargar comentarios:', error); // Manejo de errores
      }
    );
  }

  // Agregar un nuevo comentario (solo local)
  addComentario() {
    if (!this.newComentario.usuario || !this.newComentario.comentario) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const newComentario = {
      id: this.comentarios.length > 0 ? Math.max(...this.comentarios.map(c => c.id)) + 1 : 1, // Generar un ID único
      usuario: this.newComentario.usuario,
      estacionamiento: this.newComentario.estacionamiento,
      comentario: this.newComentario.comentario,
      calificacion: this.newComentario.calificacion,
    };

    this.comentarios.push(newComentario); // Agrega el nuevo comentario localmente
    this.resetForm(); // Limpia el formulario
  }

  // Establecer un comentario en edición
  updateComentario(comentario: any) {
    this.editingComentario = { ...comentario }; // Realiza una copia del comentario
    this.newComentario = { ...comentario }; // Carga los datos en el formulario
  }

  // Guardar los cambios al comentario editado
  saveComentario() {
    if (!this.editingComentario) return;

    const index = this.comentarios.findIndex(c => c.id === this.editingComentario.id);
    if (index !== -1) {
      this.comentarios[index] = { ...this.newComentario }; // Actualiza el comentario en el array
    }

    this.resetForm(); // Resetea el formulario
  }

  // Eliminar un comentario
  deleteComentario(comentarioId: number) {
    this.comentarios = this.comentarios.filter(c => c.id !== comentarioId); // Filtra el comentario eliminado
  }

  // Resetea el formulario
  resetForm() {
    this.newComentario = { id: 0, usuario: '', estacionamiento: '', comentario: '', calificacion: 0 }; // Limpia los campos
    this.editingComentario = null; // Limpia el comentario en edición
  }
}
