import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  // solo en angular 17
  // http2 = inject(HttpClient)

  urlBase: string = environment.servidor1

  constructor(private http: HttpClient) { }

  listarCategorias(){
    return this.http.get(`${this.urlBase}/categoria`)
  }

  guardarCategoria(datos: any){
    return this.http.post(`${this.urlBase}/categoria`, datos)
  }

  mostrarCategorias(id: number){
    return this.http.get(`${this.urlBase}/categoria/${id}`)
  }

  modificarCategoria(id: number, datos: any){
    return this.http.put(`${this.urlBase}/categoria/${id}`, datos)
  }

  eliminarCategoria(id: number){
    return this.http.delete(`${this.urlBase}/categoria/${id}`)
  }
}
