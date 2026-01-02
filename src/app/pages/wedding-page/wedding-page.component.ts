import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { GuestInfoComponent } from '../guest-info/guest-info.component';
import { WeddingEventsComponent } from '../wedding-events/wedding-events.component';

@Component({
  selector: 'app-wedding-page',
  imports: [
    CommonModule,
    HomeComponent,
    WeddingEventsComponent,
    GuestInfoComponent,
  ],
  template: `
    <app-home></app-home>
    <app-wedding-events></app-wedding-events>
    <app-guest-info></app-guest-info>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class WeddingPageComponent {}
