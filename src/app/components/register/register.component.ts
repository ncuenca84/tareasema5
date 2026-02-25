import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'; // 👈 aquí
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule], // 👈 aquí

  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  registerForm;

 constructor(
  private fb: FormBuilder,
  private authService: AuthService,
  private router: Router   // 👈 ahora sí existe
) {
  this.registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  }

onSubmit() {
  if (this.registerForm.valid) {
    const data = {
      email: this.registerForm.value.email ?? '',
      password: this.registerForm.value.password ?? ''
    };

    this.authService.register(data).subscribe({
      next: res => {
        console.log('✅ Usuario registrado', res);
        alert('Usuario registrado correctamente');
        this.router.navigate(['/login']); // 👈 ahora funciona
      },
      error: err => {
        console.error('❌ Error en registro', err);
        alert('Error al registrar usuario');
      }
    });


    }
  }
}