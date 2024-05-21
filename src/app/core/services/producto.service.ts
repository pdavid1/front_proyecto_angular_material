import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlBase: string = environment.servidor1

  constructor(private http: HttpClient) { }

  listarProducto(){
    return this.http.get(`${this.urlBase}/producto`)
  }
}
