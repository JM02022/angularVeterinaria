import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { THistorial } from 'src/app/models/historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http:HttpClient) { }
  private url:string = "http://localhost:3000/historial";
  getHistorial(){
    return this.http.get<THistorial[]>(this.url);
  }
  getHistorialById(id:any){
    let url = this.url+"/"+ id;
    return this.http.get<THistorial>(url);
  }
  postHistorial(Thistorial:any){
    return this.http.post(this.url,Thistorial);
  }
  putHistorial(id:any,thistorial:any){//update
    let url = this.url+"/"+ id;
    return this.http.put(url,thistorial);
  }
  deleteHistorial(id:any){
    let url = this.url+"/"+ id;
    return this.http.delete(url)
  }
}
