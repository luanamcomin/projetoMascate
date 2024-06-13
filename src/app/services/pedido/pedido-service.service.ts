import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Pedido {
  numero: string;
  hora: string;
  tipo: string;
  data?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PedidoServiceService {
  private apiUrl = 'http://localhost:3000/api/pedidos'; // URL da API

  constructor(private http: HttpClient) { }

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl);
  }
}
