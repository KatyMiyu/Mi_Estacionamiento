import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Pagina404Page } from './pagina404/pagina404.page';


//Importar guard
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  
  
  //{
    //path: '',
    //redirectTo: 'home',
    //pathMatch: 'full'
  //},

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'arrendatario',
    loadChildren: () => import('./arrendatario/arrendatario.module').then( m => m.ArrendatarioPageModule)
  },
  {
    path: 'arrendador',
    loadChildren: () => import('./arrendador/arrendador.module').then( m => m.ArrendadorPageModule)
  },
  
  {
    path: 'pagina404',
    loadChildren: () => import('./pagina404/pagina404.module').then( m => m.Pagina404PageModule)
  },
  {
    path:'**',
    component:Pagina404Page
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
