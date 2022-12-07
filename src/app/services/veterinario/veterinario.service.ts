import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TVeterinario } from 'src/app/models/veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(private http:HttpClient) { }
  private url:string = "http://localhost:3000/veterinario";
  getVeterinario(){
    return this.http.get<TVeterinario[]>(this.url);
  }
  getVeterinarioById(id:any){
    let url = this.url+"/"+ id;
    return this.http.get<TVeterinario>(url);
  }
  postVeterinario(tveterinario:any){
    return this.http.post(this.url,tveterinario);
  }
  putVeterinario(id:any,tveterinario:any){//update
    let url = this.url+"/"+ id;
    return this.http.put(url,tveterinario);
  }
  deleteVeterinario(id:any){
    let url = this.url+"/"+ id;
    return this.http.delete(url)
  }
}
