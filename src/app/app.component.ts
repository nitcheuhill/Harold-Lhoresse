import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { WeddingEventsComponent } from './pages/wedding-events/wedding-events.component';
import { GuestInfoComponent } from './pages/guest-info/guest-info.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HomeComponent,
    WeddingEventsComponent,
    GuestInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Harold';
}
