import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TConsulta } from 'src/app/models/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http:HttpClient) { }
  private url:string = "http://localhost:3000/consulta";
  getConsulta(){
    return this.http.get<TConsulta[]>(this.url);
  }
  getConsultaById(id:any){
    let url = this.url+"/"+ id;
    return this.http.get<TConsulta>(url);
  }
  postConsulta(tconsulta:any){
    return this.http.post(this.url,tconsulta);
  }
  putConsulta(id:any,tconsulta:any){//update
    let url = this.url+"/"+ id;
    return this.http.put(url,tconsulta);
  }
  deleteConsulta(id:any){
    let url = this.url+"/"+ id;
    return this.http.delete(url)
  }
}
