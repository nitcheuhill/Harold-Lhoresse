import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guest-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guest-info.component.html',
  styleUrls: ['./guest-info.component.scss'],
})
export class GuestInfoComponent {
  guestName = 'Mr et Madame : Nono';
  tableName = 'Amour';
  dressCode = 'Blanc or';
  message = 'Nous espérons vous comptez parmi nous !';
  dates = '09.01.2026 - 10.01.2026';
  backgroundImage = '/images/guest-bg.png';
}
