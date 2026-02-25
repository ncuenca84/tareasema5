import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        email: this.loginForm.value.email ?? '',
        password: this.loginForm.value.password ?? ''
      };

      this.authService.login(credentials).subscribe({
        next: res => {
          console.log('✅ Login exitoso', res);
          this.router.navigate(['/dashboard']);
        },
        error: err => {
          console.error('❌ Error en login', err);
          alert('Credenciales inválidas');
        }
      });
    }
  }
}