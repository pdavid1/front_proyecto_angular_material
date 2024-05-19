import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  // solo en angular 17
  // http2 = inject(HttpClient)

  urlBase: string = "https://lv.blumbit.net/back/public/api"

  constructor(private http: HttpClient) { }

  listarCategorias(){
    return this.http.get(`${this.urlBase}/categoria`,{ headers: {authorization: 'Bearer 80|gn7u1kTbSs3Zdi4eg49duOBEoJypewyz6qN3tM4jda693f6e'}})
  }

  guardarCategoria(datos: any){
    return this.http.post(`${this.urlBase}/categoria`, datos, { headers: {authorization: 'Bearer 80|gn7u1kTbSs3Zdi4eg49duOBEoJypewyz6qN3tM4jda693f6e'}})
  }

  mostrarCategorias(id: number){
    return this.http.get(`${this.urlBase}/categoria${id}`)
  }

  modificarCategoria(id: number, datos: any){
    return this.http.put(`${this.urlBase}/categoria${id}`, datos)
  }

  eliminarCategoria(id: number){
    return this.http.delete(`${this.urlBase}/categoria${id}`)
  }
}
