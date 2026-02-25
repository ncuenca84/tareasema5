import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrestamoService } from '../../services/prestamo.service';
import { Prestamo } from '../../models/prestamo';

@Component({
  selector: 'app-prestamos',
  standalone: true,   // 👈 standalone
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {
  prestamos: Prestamo[] = []; // 👈 propiedad usada en el HTML
  nuevo: Prestamo = { id: 0, cliente: '', monto: 0, fecha: '' }; // 👈 propiedad usada en el HTML

  constructor(private prestamoService: PrestamoService) {}

  ngOnInit() {
    this.cargarPrestamos();
  }

  cargarPrestamos() {
    this.prestamoService.getAll().subscribe(data => this.prestamos = data);
  }

  agregar() {
    this.prestamoService.add(this.nuevo).subscribe(() => {
      this.cargarPrestamos();
      this.nuevo = { id: 0, cliente: '', monto: 0, fecha: '' };
    });
  }

  editar(prestamo: Prestamo) {
    this.nuevo = { ...prestamo };
  }

  actualizar() {
    this.prestamoService.update(this.nuevo).subscribe(() => {
      this.cargarPrestamos();
      this.nuevo = { id: 0, cliente: '', monto: 0, fecha: '' };
    });
  }

  eliminar(id: number) {
    this.prestamoService.delete(id).subscribe(() => this.cargarPrestamos());
  }
}