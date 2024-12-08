import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

//Importar crubfirebase
import { UsuariosfirebaseComponent } from '../componentes/usuariosfirebase/usuariosfirebase.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage,
    UsuariosfirebaseComponent,
  ]
})
export class RegisterPageModule {}
