import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TDuenio } from 'src/app/models/duenio';
import { DuenioService } from 'src/app/services/duenio/duenio.service';

@Component({
  selector: 'app-duenio',
  templateUrl: './duenio.component.html',
  styleUrls: ['./duenio.component.scss']
})
export class DuenioComponent implements OnInit {
  duenioFormulario:FormGroup = new FormGroup({})
  public listaDuenios:TDuenio[] = []
  indiceDuenio:number = 0;
  constructor(private formBuilder:FormBuilder,private duenioService:DuenioService) { 
    this.getDuenios();
  }

  ngOnInit(): void {
    this.duenioFormulario = this.formBuilder.group({
      CodDuenio: ['',Validators.required],
      DniDuenio: ['',Validators.required],
      NomDuenio: ['',Validators.required],
      ApeDuenio: ['',Validators.required],
      EdadDuenio: ['',Validators.required],
      Email: ['',Validators.required],
      CelDuenio: ['',Validators.required],
      DireccionDuenio: ['',Validators.required]
    })
  }
  duenioVacioEditar:TDuenio = {
      CodDuenio: "",
      DniDuenio: "",
      NomDuenio: "",
      ApeDuenio: "",
      EdadDuenio: "",
      Email: "",
      CelDuenio: "",
      DireccionDuenio: ""
  }
  getDuenios(){
    this.duenioService.getDuenio().subscribe((data:TDuenio[]) => {
      this.listaDuenios = data
    })
  }
  agregarDuenioFormulario(){
    if(this.duenioFormulario.valid){
      const duenio = {
        CodDuenio: this.duenioFormulario.value.CodDuenio,
        DniDuenio: this.duenioFormulario.value.DniDuenio,
        NomDuenio: this.duenioFormulario.value.NomDuenio,
        ApeDuenio: this.duenioFormulario.value.ApeDuenio,
        EdadDuenio: this.duenioFormulario.value.EdadDuenio,
        Email: this.duenioFormulario.value.Email,
        CelDuenio: this.duenioFormulario.value.CelDuenio,
        DireccionDuenio: this.duenioFormulario.value.DireccionDuenio,
      }
      console.table(duenio)
      this.duenioService.postDuenio(duenio).subscribe(data => {
        console.log("datos",data)
        this.getDuenios();
        alert("Dueño Agregado")
        this.duenioFormulario.reset();
      })
    }
  }
  eliminarDuenio(){
    let duenio:TDuenio= this.listaDuenios[this.indiceDuenio];
    this.duenioService.deleteDuenio(duenio.CodDuenio).subscribe(data => {
      if(data != "se elimino"){
        alert("el cliente se esta usando y no se puede eliminar")
      }else{
        this.getDuenios();
      }
      }
    )
  }
  capturarIndice(indice:number){
    this.indiceDuenio = indice
  }
  capturarDuenioEditar(i:number){
    this.indiceDuenio = i
    let duenio:TDuenio = this.listaDuenios[i]
    this.duenioVacioEditar = duenio
  }
  editarDuenio(){
    let duenio:TDuenio= this.listaDuenios[this.indiceDuenio]
    this.duenioVacioEditar = duenio
    let duenioModificado = {
	    CodDuenio: this.duenioVacioEditar.CodDuenio,
      DniDuenio: this.duenioVacioEditar.DniDuenio,
      NomDuenio: this.duenioVacioEditar.NomDuenio,
      ApeDuenio: this.duenioVacioEditar.ApeDuenio,
      EdadDuenio: this.duenioVacioEditar.EdadDuenio,
      Email: this.duenioVacioEditar.Email,
      CelDuenio: this.duenioVacioEditar.CelDuenio,
      DireccionDuenio: this.duenioVacioEditar.DireccionDuenio,
    }
    this.duenioService.putDuenio(duenio.CodDuenio,duenioModificado).subscribe(data => {
      if(data != "error"){
        this.getDuenios();
      }else{
        alert("hubo un problema al actualizar datos")
      }
    })
  }
}
