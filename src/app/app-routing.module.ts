import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DuenioComponent } from './pages/duenio/duenio.component';
import { LoginComponent } from './pages/login/login.component';
import { MascotaComponent } from './pages/mascota/mascota.component';
import { VeterinarioComponent } from './pages/veterinario/veterinario.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    canActivate:[AuthGuard],
    path:'duenio',
    component: DuenioComponent
  },
  {
    canActivate:[AuthGuard],
    path:'mascota',
    component:MascotaComponent
  },
  {
    canActivate:[AuthGuard],
    path:'veterinario',
    component:VeterinarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
