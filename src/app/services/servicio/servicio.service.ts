import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TServicio } from 'src/app/models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }
  private url:string = "http://localhost:3000/servicio";
  getServicio(){
    return this.http.get<TServicio[]>(this.url);
  }
  getServicioById(id:any){
    let url = this.url+"/"+ id;
    return this.http.get<TServicio>(url);
  }
  postServicio(tservicio:any){
    return this.http.post(this.url,tservicio);
  }
  putServicio(id:any,tservicio:any){//update
    let url = this.url+"/"+ id;
    return this.http.put(url,tservicio);
  }
  deleteServicio(id:any){
    let url = this.url+"/"+ id;
    return this.http.delete(url)
  }
}
