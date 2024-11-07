//Importar
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Importar AngularFireModule para conectar la aplicación con Firebase utilizando la compatibilidad de versiones
import { AngularFireModule } from '@angular/fire/compat';
//Importar la configuración del entorno, que contien las claves y configuraciones de Firebase 
import { environment } from '../environments/environment';

// Importa el proveedor para habilitar animaciones asíncronas en la aplicación.
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 

//Importar un servicio personalizado para CRUD
import { CrudfirebaseService } from './servicios/crudfirebase.service';

// Importa el módulo de autenticación de Firebase para habilitar funciones de autenticación en la aplicación.
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; 




@NgModule({
  // Declara el componente raíz de la aplicación.
  declarations: [AppComponent], 

  // Importa módulos necesarios para la aplicación.
  imports: [ 
    BrowserModule, // Módulo necesario para las aplicaciones web.
    IonicModule.forRoot(), // Configura y habilita Ionic.
    AppRoutingModule, // Módulo de enrutamiento de la aplicación.
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializar Firebase con la configuración del entorno.
    AngularFireAuthModule // Habilitar el módulo de autenticación de Firebase.
  ], 

  // Proveedores de servicios y estrategias de enrutamiento.
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, // Configura la estrategia de reutilización de rutas de Ionic.
    provideAnimationsAsync(), // Proveedor para animaciones asíncronas.
    CrudfirebaseService // Proveedor del servicio CRUD para Firebase.
  ], 

  // Componente que se carga al iniciar la aplicación.
  bootstrap: [AppComponent], 
})
// Define el módulo raíz de la aplicación.
export class AppModule {}
