import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://localhost:7078/api/account'; // 👈 puerto correcto

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

register(data: { email: string; password: string }) {
  return this.http.post(`${this.apiUrl}/register`, data);
}


  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }
}