import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  login(email:string, contrasenia:string):Observable<any>{
    let body = {
      Email:email,
      Contrasenia:contrasenia
    }
    return this.http.post('http://localhost:3000/login',body)
  }
}
