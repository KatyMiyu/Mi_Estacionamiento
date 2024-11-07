import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

// Importa los componentes que usas en el home.page.html
import { ExperienciaLaboralComponent } from '../componentes/experiencia-laboral/experiencia-laboral.component';
import { CertificacionesComponent } from '../componentes/certificaciones/certificaciones.component';
import { MisDatosComponent } from '../componentes/mis-datos/mis-datos.component';

//Importar crubfirebase
import { UsuariosfirebaseComponent } from '../componentes/usuariosfirebase/usuariosfirebase.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,
    // Declara aquí los componentes utilizados
    ExperienciaLaboralComponent,
    CertificacionesComponent,
    MisDatosComponent,
    UsuariosfirebaseComponent,
  ]
})
export class HomePageModule {}

