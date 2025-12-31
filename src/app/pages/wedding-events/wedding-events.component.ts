import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  mapLink: string;
  image: string;
  imagePosition: 'left' | 'right';
}

@Component({
  selector: 'app-wedding-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wedding-events.component.html',
  styleUrls: ['./wedding-events.component.scss'],
})
export class WeddingEventsComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChildren('eventCard', { read: ElementRef })
  eventCards!: QueryList<ElementRef>;

  private observer?: IntersectionObserver;

  events: WeddingEvent[] = [
    {
      title: 'Traditionnel',
      date: '09.01.2026',
      time: '20h',
      location: 'Pk 14 Douala',
      mapLink: 'https://maps.google.com/?q=Pk+14+Douala',
      image: '/images/img2.png',
      imagePosition: 'left',
    },
    {
      title: 'Civil',
      date: '10.01.2026',
      time: '12h',
      location: 'A côté du College Duvaal Douala',
      mapLink: 'https://maps.google.com/?q=College+Duvaal+Douala',
      image: '/images/img3.png',
      imagePosition: 'right',
    },
    {
      title: 'Soirée de Gala',
      date: '10.01.2026',
      time: '20h',
      location:
        'Salle de fêtes "Chateau blanc" à côté du collège conquête Beedi',
      mapLink:
        'https://maps.google.com/?q=Chateau+blanc+college+conquete+Beedi+Douala',
      image: '/images/img4.png',
      imagePosition: 'left',
    },
  ];

  ngOnInit(): void {
    // Création de l'Intersection Observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ajouter la classe 'animate' quand l'élément entre dans le viewport
            entry.target.classList.add('animate');
            // On peut optionnellement arrêter d'observer après l'animation
            // this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // L'animation se déclenche quand 20% de l'élément est visible
        rootMargin: '0px 0px -50px 0px', // Déclenche un peu avant que l'élément soit complètement visible
      }
    );
  }

  ngAfterViewInit(): void {
    // Observer tous les event-cards
    setTimeout(() => {
      this.eventCards.forEach((card) => {
        if (this.observer) {
          this.observer.observe(card.nativeElement);
        }
      });
    });
  }

  ngOnDestroy(): void {
    // Nettoyer l'observer
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
