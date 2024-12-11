import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/api-rest.service';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.scss'],
})
export class EstacionamientoComponent implements OnInit {
  estacionamientos: any[] = []; // Lista de estacionamientos cargados
  newEstacionamiento: any = { id: 0, nombre: '', direccion: '', cantidad_disponible: 0, horario: '', tarifa_por_hora: 0 }; // Nuevo estacionamiento
  editingEstacionamiento: any | null = null; // Estacionamiento en edición

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadEstacionamientos();
  }

  // Cargar los estacionamientos desde el servicio
  loadEstacionamientos() {
    this.dataService.getEstacionamientos().subscribe(
      (data) => {
        this.estacionamientos = data; // Asigna los datos obtenidos al arreglo de estacionamientos
      },
      (error) => {
        console.error('Error al cargar estacionamientos:', error); // Manejo de errores
      }
    );
  }

  // Agregar un nuevo estacionamiento (solo local)
  addEstacionamiento() {
    if (!this.newEstacionamiento.nombre || !this.newEstacionamiento.direccion) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const newEstacionamiento = {
      id: this.estacionamientos.length > 0 ? Math.max(...this.estacionamientos.map(e => e.id)) + 1 : 1, // Generar un ID único
      nombre: this.newEstacionamiento.nombre,
      direccion: this.newEstacionamiento.direccion,
      cantidad_disponible: this.newEstacionamiento.cantidad_disponible,
      horario: this.newEstacionamiento.horario,
      tarifa_por_hora: this.newEstacionamiento.tarifa_por_hora,
    };

    this.estacionamientos.push(newEstacionamiento); // Agrega el nuevo estacionamiento localmente
    this.resetForm(); // Limpia el formulario
  }

  // Establecer un estacionamiento en edición
  updateEstacionamiento(estacionamiento: any) {
    this.editingEstacionamiento = { ...estacionamiento }; // Realiza una copia del estacionamiento
    this.newEstacionamiento = { ...estacionamiento }; // Carga los datos en el formulario
  }

  // Guardar los cambios al estacionamiento editado
  saveEstacionamiento() {
    if (!this.editingEstacionamiento) return;

    const index = this.estacionamientos.findIndex(e => e.id === this.editingEstacionamiento.id);
    if (index !== -1) {
      this.estacionamientos[index] = { ...this.newEstacionamiento }; // Actualiza el estacionamiento en el array
    }

    this.resetForm(); // Resetea el formulario
  }

  // Eliminar un estacionamiento
  deleteEstacionamiento(estacionamientoId: number) {
    this.estacionamientos = this.estacionamientos.filter(e => e.id !== estacionamientoId); // Filtra el estacionamiento eliminado
  }

  // Resetea el formulario
  resetForm() {
    this.newEstacionamiento = { id: 0, nombre: '', direccion: '', cantidad_disponible: 0, horario: '', tarifa_por_hora: 0 }; // Limpia los campos
    this.editingEstacionamiento = null; // Limpia el estacionamiento en edición
  }
}

