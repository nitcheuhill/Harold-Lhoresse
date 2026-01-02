import { Routes } from '@angular/router';
import { WeddingPageComponent } from './pages/wedding-page/wedding-page.component';

export const routes: Routes = [
  // Route par défaut - Affiche la page complète SANS guest ID
  {
    path: '',
    component: WeddingPageComponent,
  },

  // Route avec ID invité - Affiche la page complète AVEC guest ID
  // Le composant GuestInfoComponent à l'intérieur de WeddingPageComponent
  // va détecter le paramètre guestId et afficher les bonnes infos
  {
    path: ':guestId',
    component: WeddingPageComponent,
  },

  // Route wildcard pour les URLs invalides
  {
    path: '**',
    redirectTo: '',
  },
];
