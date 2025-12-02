import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  usuario = '';
  contrasena = '';
  estado: 'idle' | 'loading' | 'ok' | 'error' = 'idle';
  mensaje = '';

  private loginService = inject(LoginService);

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.estado = 'loading';
    this.mensaje = '';
    this.loginService.logIn({ usuario: this.usuario, contrasena: this.contrasena }).subscribe({
      next: () => {
        this.estado = 'ok';
        this.mensaje = 'Inicio de sesión enviado.';
      },
      error: () => {
        this.estado = 'error';
        this.mensaje = 'Error al iniciar sesión. Intente de nuevo.';
      }
    });
  }
}
