import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DuenioComponent } from './pages/duenio/duenio.component';
import { MascotaComponent } from './pages/mascota/mascota.component';
import { VeterinarioComponent } from './pages/veterinario/veterinario.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DuenioComponent,
    MascotaComponent,
    VeterinarioComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
