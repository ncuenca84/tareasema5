import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'prestamos', component: PrestamosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}