import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LogInPayload {
  usuario: string;
  contrasena: string;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  private readonly apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  logIn(payload: LogInPayload): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/api/LogIn`, payload);
  }
}
