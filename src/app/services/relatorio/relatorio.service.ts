import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Pedido {
  id: number;
  produto: string;
  quantidade: number;
  data: string; // Assume ISO format for date
  hora: string; // Assume HH:mm format for time
}

@Injectable({
  providedIn: 'root',
})
export class RelatorioService {
  private apiUrl = 'http://localhost:4200/relatorios';

  constructor(private http: HttpClient) {}

  getRelatorios(periodo: 'dia' | 'semana' | 'mes'): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}?periodo=${periodo}`);
  }
}
