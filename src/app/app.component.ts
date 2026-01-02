import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ← DÉCOMMENTER
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // ← Assurez-vous que c'est présent
  imports: [
    CommonModule,
    RouterOutlet, // ← AJOUTER ICI
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Harold';
}
