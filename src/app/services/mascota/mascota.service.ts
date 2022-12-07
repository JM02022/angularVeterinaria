import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TMascota } from 'src/app/models/mascotas';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http:HttpClient) { }
  private url:string = "http://localhost:3000/mascota";
  getMascota(){
    return this.http.get<TMascota[]>(this.url);
  }
  getMascotaById(id:any){
    let url = this.url+"/"+ id;
    return this.http.get<TMascota>(url);
  }
  postMascota(Tmascota:any){
    return this.http.post(this.url,Tmascota);
  }
  putMascota(id:any,tmascota:any){//update
    let url = this.url+"/"+ id;
    return this.http.put(url,tmascota);
  }
  deleteMascota(id:any){
    let url = this.url+"/"+ id;
    return this.http.delete(url)
  }
}
