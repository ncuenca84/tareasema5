import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {}   // 👈 asegúrate de exportar esta clase