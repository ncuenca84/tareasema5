import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestamo } from '../models/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  // 👇 Ajusta la URL según tu backend
  private apiUrl = 'https://localhost:7078/Prestamoes';

  constructor(private http: HttpClient) {}

  // Obtener todos los préstamos
  getAll(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(this.apiUrl);
  }

  // Agregar un nuevo préstamo
  add(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.apiUrl, prestamo);
  }

  // Actualizar un préstamo existente
  update(prestamo: Prestamo): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${prestamo.id}`, prestamo);
  }

  // Eliminar un préstamo por ID
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}