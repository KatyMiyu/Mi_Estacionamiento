import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrendadorPageRoutingModule } from './arrendador-routing.module';

import { ArrendadorPage } from './arrendador.page';

// Importa los componentes que usas en el home.page.html
import { ExperienciaLaboralComponent } from '../componentes/experiencia-laboral/experiencia-laboral.component';
import { CertificacionesComponent } from '../componentes/certificaciones/certificaciones.component';
import { MisDatosComponent } from '../componentes/mis-datos/mis-datos.component';

//Importar ApiRest
import { ApiRestComponent } from '../componentes/api-rest/api-rest.component';

//Importar QR
import { QrScannerComponent } from '../componentes/qr-scanner/qr-scanner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArrendadorPageRoutingModule
  ],
  declarations: [ArrendadorPage,
    // Declara aquí los componentes utilizados
    ExperienciaLaboralComponent,
    CertificacionesComponent,
    MisDatosComponent,
    //UsuariosfirebaseComponent,
    ApiRestComponent,
    QrScannerComponent
  ]
})
export class ArrendadorPageModule {}
