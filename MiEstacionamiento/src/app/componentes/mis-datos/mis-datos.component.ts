import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})
export class MisDatosComponent implements OnInit {
  datosContacto = {
    celular: '',
    correo: '',
    direccion: '',
    ciudad: ''
  };

  datosGuardados: any = null; // Variable para mostrar los datos guardados

  constructor() {}

  ngOnInit() {}

  guardarDatos() {
    // Verifica si todos los campos tienen valores antes de guardar
    if (
      this.datosContacto.celular &&
      this.datosContacto.correo &&
      this.datosContacto.direccion &&
      this.datosContacto.ciudad
    ) {
      this.datosGuardados = { ...this.datosContacto };
      console.log('Datos guardados:', this.datosGuardados);
    } else {
      alert('Por favor, completa todos los campos antes de guardar.');
    }
  }
}

