import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss'],
})
export class CertificacionesComponent implements OnInit {
  datosFormulario = {
    nombreCuenta: '',
    banco: '',
    tipoCuenta: '',
    numeroCuenta: ''
  };

  datosGuardados: any = null; // Variable para mostrar los datos guardados

  constructor() {}

  ngOnInit() {}

  guardarDatos() {
    // Verifica si todos los campos tienen valores antes de guardar
    if (
      this.datosFormulario.nombreCuenta &&
      this.datosFormulario.banco &&
      this.datosFormulario.tipoCuenta &&
      this.datosFormulario.numeroCuenta
    ) {
      this.datosGuardados = { ...this.datosFormulario };
      console.log('Datos guardados:', this.datosGuardados);
    } else {
      alert('Por favor, completa todos los campos antes de guardar.');
    }
  }
}


