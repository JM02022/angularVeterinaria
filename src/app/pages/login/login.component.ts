import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  miFormulario:FormGroup = new FormGroup({})
  texto:boolean = false
  constructor(private formBuilder:FormBuilder,private router:Router, private adminServic:AdminService) { }
  ngOnInit(): void {
    let token = sessionStorage.getItem('token')
    if(token){
      this.router.navigate(['duenio'])
    }
    this.miFormulario= this.formBuilder.group({
      Email: ['',Validators.required], 
      Contrasenia: ['',Validators.required],
    })
  }
  loginUsuario(){
    if(this.miFormulario.valid){
      this.adminServic.login(this.miFormulario.value.Email,this.miFormulario.value.Contrasenia).subscribe(
        (response) => {
          console.log(response)
          if(response == "error"){
            this.texto = true
            setTimeout(() => {
              this.texto = false
            }, 2000);
          }
          if(response.token){
            this.texto = false
            sessionStorage.setItem('token',response.token)
            this.router.navigate(['duenio'])
          }
        }
      )
    }
  }

}
