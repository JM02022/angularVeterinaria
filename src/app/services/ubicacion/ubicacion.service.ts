import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ubicacion } from 'src/app/models/ubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private http:HttpClient) { }
  private url:string = "http://localhost:3000/ubicacion";
  getUbicacion(){
    return this.http.get<ubicacion>(this.url);
  }
}
