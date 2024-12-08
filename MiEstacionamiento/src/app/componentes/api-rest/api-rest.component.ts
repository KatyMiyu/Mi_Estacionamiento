import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/servicios/api-rest.service';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.component.html',
  styleUrls: ['./api-rest.component.scss'],
})
export class ApiRestComponent implements OnInit {
  comentarios: any[] = [];  // Cambiado de 'users' a 'comentarios' para trabajar con datos de db.json
  newComentario: any = { id: 0, usuario: '', estacionamiento: '', comentario: '', calificacion: 0 };  // Para el formulario de nuevo comentario
  editingComentario: any | null = null;  // Para el comentario que se está editando

  constructor(private apiRestService: ApiRestService) {}

  ngOnInit() {
    this.loadComentarios();
  }

  // Cargar los comentarios desde el servicio
  loadComentarios() {
    this.comentarios = this.apiRestService.getLocalComentarios();
  }

  // Agregar un nuevo comentario
  addComentario() {
    if (!this.newComentario.usuario || !this.newComentario.comentario) return;  // Validación básica

    const newComentario = {
      id: this.comentarios.length > 0 ? Math.max(...this.comentarios.map(c => c.id)) + 1 : 1,  // Genera un ID único
      usuario: this.newComentario.usuario,
      estacionamiento: this.newComentario.estacionamiento,
      comentario: this.newComentario.comentario,
      calificacion: this.newComentario.calificacion
    };

    this.comentarios.push(newComentario);  // Agrega el nuevo comentario a la lista
    this.resetForm();  // Resetea el formulario
  }

  // Establecer un comentario en edición
  updateComentario(comentario: any) {
    this.editingComentario = comentario;  // Establece el comentario que se está editando
    this.newComentario.id = comentario.id;  // Asegúrate de que el ID se asigne al nuevo comentario
    this.newComentario.usuario = comentario.usuario;  // Carga el usuario en el formulario
    this.newComentario.estacionamiento = comentario.estacionamiento;  // Carga el estacionamiento
    this.newComentario.comentario = comentario.comentario;  // Carga el comentario
    this.newComentario.calificacion = comentario.calificacion;  // Carga la calificación
  }

  // Guardar el comentario editado
  saveComentario() {
    if (!this.editingComentario) return;  // Asegúrate de que hay un comentario en edición

    const updatedComentario = {
      id: this.editingComentario.id,  // Usa el ID existente
      usuario: this.newComentario.usuario,
      estacionamiento: this.newComentario.estacionamiento,
      comentario: this.newComentario.comentario,
      calificacion: this.newComentario.calificacion
    };

    const index = this.comentarios.findIndex(c => c.id === updatedComentario.id);
    if (index !== -1) {
      this.comentarios[index] = updatedComentario;  // Actualiza el comentario en el array
    }
    this.resetForm();  // Resetea el formulario
    this.editingComentario = null;  // Limpia el comentario en edición
  }

  // Eliminar un comentario
  deleteComentario(comentarioId: number) {
    this.comentarios = this.comentarios.filter(c => c.id !== comentarioId);  // Filtra el comentario eliminado
  }

  // Resetea el formulario de nuevo comentario
  resetForm() {
    this.newComentario = { id: 0, usuario: '', estacionamiento: '', comentario: '', calificacion: 0 };  // Resetea el formulario
    this.editingComentario = null;  // Limpia el comentario en edición
  }
}

