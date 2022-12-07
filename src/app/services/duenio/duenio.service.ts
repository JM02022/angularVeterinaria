import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TDuenio } from 'src/app/models/duenio';

@Injectable({
  providedIn: 'root'
})
export class DuenioService {

  constructor(private http:HttpClient) { }
  private url:string = "http://localhost:3000/duenio";
  getDuenio(){
    return this.http.get<TDuenio[]>(this.url);
  }
  getDuenioById(id:any){
    let url = this.url+"/"+ id;
    return this.http.get<TDuenio>(url);
  }
  postDuenio(tduenio:any){
    return this.http.post(this.url,tduenio);
  }
  putDuenio(id:any,tduenio:any){//update
    let url = this.url+"/"+ id;
    return this.http.put(url,tduenio);
  }
  deleteDuenio(id:any){
    let url = this.url+"/"+ id;
    return this.http.delete(url)
  }
}
