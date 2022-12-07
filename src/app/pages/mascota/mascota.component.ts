import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TDuenio } from 'src/app/models/duenio';
import { TMascota } from 'src/app/models/mascotas';
import { MascotaService } from 'src/app/services/mascota/mascota.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent implements OnInit {

  duenioFormulario:FormGroup = new FormGroup({})
  public listaDuenios:TMascota[] = []
  indiceDuenio:number = 0;
  constructor(private formBuilder:FormBuilder,private mascotaSerivce:MascotaService) { 
  
  }

  ngOnInit(): void {
  }

}
